import express from "express";
import userController from "../controller/user-controller.js";
import donorController from "../controller/donor-controller.js";
import { eventMiddleware } from "../middleware/event-middleware.js";

const publicRoutes = new express.Router();

publicRoutes.post("/api/users", userController.register);
publicRoutes.post("/api/reset/users", userController.sendEmailForResetPassword);
publicRoutes.post("/api/users/login", userController.login);
publicRoutes.post(
  "/api/users/reset/code",
  userController.verifyCodeResetPassoword
);
publicRoutes.post("/api/users/reset/password", userController.resetPassword);

// pmi
publicRoutes.get("/api/pmi", donorController.getAllPmi);
publicRoutes.get("/api/pmi/:pmiId", donorController.getDetailPmi);
publicRoutes.get("/api/event", eventMiddleware, donorController.getEvent);
publicRoutes.get("/api/pmi/stock/:id", donorController.getStockBlood);

export { publicRoutes };
