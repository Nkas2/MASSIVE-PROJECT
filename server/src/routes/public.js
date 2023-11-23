import express from "express";
import userController from "../controller/user-controller.js";
import { loginMiddleware } from "../middleware/login-middleware.js";

const publicRoutes = new express.Router();
publicRoutes.post("/api/users", userController.register);
publicRoutes.post("/api/users/login", loginMiddleware, userController.login);

export { publicRoutes };
