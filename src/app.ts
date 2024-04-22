import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { setupRoutes } from "./routes";
import {
  customErrorHandler,
  defaultErrorHandler,
  errorLogger,
  modelErrorHandler,
} from "./middlewares";
import { onAppListen } from "src/utils/helpers";
import { config } from "./config";
import "src/utils/auth/passport";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
setupRoutes(app);

app.use(errorLogger);
app.use(modelErrorHandler);
app.use(customErrorHandler);
app.use(defaultErrorHandler);

app.listen(config.PORT, () => onAppListen(config.PORT));
