import express from "express";
import { publicRoutes } from "../routes/public.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import cookieParser from "cookie-parser";
import { userRouter } from "../routes/api.js";
import dotenv from "dotenv";
dotenv.config();
export const web = express();

web.use(cookieParser());
web.use(express.json());

web.use(publicRoutes);

web.use(userRouter);

web.use(errorMiddleware);
