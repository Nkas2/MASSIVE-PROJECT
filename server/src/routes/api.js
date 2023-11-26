import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import userController from "../controller/user-controller.js";
import multer from "multer";
import { fileFilter, storage } from "../config/multer.js";

const userRouter = new express.Router();

userRouter.delete("/api/users", authMiddleware, userController.logout);
userRouter.patch("/api/users", authMiddleware, userController.changePassword);
userRouter.get("/api/users", authMiddleware, userController.getUser);
userRouter.get(
  "/api/users/details",
  authMiddleware,
  userController.getUserEdit
);
userRouter.put("/api/users", authMiddleware, userController.editDetailUsers);
userRouter.post(
  "/api/image",
  authMiddleware,
  multer({ storage: storage, fileFilter: fileFilter }).single("image"),
  userController.uploadImageProfile
);

export { userRouter };
