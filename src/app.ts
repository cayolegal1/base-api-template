import cors from "cors";
import express from "express";
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
app.use(express.json());
app.use(cors());
setupRoutes(app);

app.use(errorLogger);
app.use(modelErrorHandler);
app.use(customErrorHandler);
app.use(defaultErrorHandler);

app.listen(config.PORT, () => onAppListen(config.PORT));
