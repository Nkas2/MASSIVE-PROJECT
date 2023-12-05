import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import userController from "../controller/user-controller.js";
import multer from "multer";
import { fileFilter, storage } from "../config/multer.js";
import donorController from "../controller/donor-controller.js";
import { eventMiddleware } from "../middleware/event-middleware.js";
import { newToken_middleware } from "../middleware/newToken-middleware.js";

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
userRouter.post("/api/reminder", authMiddleware, donorController.reminderMe);
userRouter.delete(
  "/api/reminder",
  authMiddleware,
  donorController.deleteRemind
);
userRouter.get("/api/event/:id", eventMiddleware, donorController.eventDetail);
userRouter.get("/api/test", newToken_middleware, userController.newToken);

export { userRouter };
