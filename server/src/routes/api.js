import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import userController from "../controller/user-controller.js";

const userRouter = new express.Router();

userRouter.use(authMiddleware);

userRouter.patch("/api/users", userController.changePassword);
userRouter.get("/api/users/details", userController.getUserEdit);
userRouter.put("/api/users", userController.editDetailUsers);

export { userRouter };
