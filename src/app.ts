import cors from "cors";
import express from "express";
import i18nextMiddleware from'i18next-http-middleware';
import { setupRoutes } from "./routes";
import {
  defaultErrorHandler,
  errorLogger,
  modelErrorHandler,
} from "./middlewares";
import { onAppListen } from "./helpers";
import { config, i18n } from "./config/index";

const app = express();
app.use(express.json());
app.use(i18nextMiddleware.handle(i18n, {}));
app.use(cors());

setupRoutes(app);

app.use(errorLogger);
app.use(modelErrorHandler);
app.use(defaultErrorHandler);

app.listen(config.PORT, () => onAppListen(config.PORT));
