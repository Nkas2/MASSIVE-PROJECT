import express from "express";
import userController from "../controller/user-controller.js";

const publicRoutes = new express.Router();

publicRoutes.post("/api/users", userController.register);
publicRoutes.post("/api/reset/users", userController.sendEmailForResetPassword);
publicRoutes.post("/api/users/login", userController.login);
publicRoutes.post(
  "/api/users/reset/code",
  userController.verifyCodeResetPassoword
);
publicRoutes.post("/api/users/reset/password", userController.resetPassword);

export { publicRoutes };
