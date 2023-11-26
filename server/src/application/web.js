import express from "express";
import { publicRoutes } from "../routes/public.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import cookieParser from "cookie-parser";
import { userRouter } from "../routes/api.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

export const web = express();
web.use("/images", express.static(path.join(__dirname, "./../../images")));

web.use(cookieParser());
web.use(express.json());
web.use(publicRoutes);
web.use(userRouter);

web.use(errorMiddleware);
