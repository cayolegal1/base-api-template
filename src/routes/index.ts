import express, { type Express} from "express";
import userRoutes from "./user.router";

const router = express.Router();

export const setupRoutes = (app: Express) => {
  router.use("/user", userRoutes);
  app.use(router);
};