import express, { type Express} from "express";
import userRoutes from "./user.router";
import authRoutes from "./auth.router";

const router = express.Router();

export const setupRoutes = (app: Express) => {
  router.use("/", authRoutes);
  router.use("/user", userRoutes);
  app.use(router);
};