import cors from "cors";
import express from "express";
import { setupRoutes } from "./routes";
import {
  i18nHandler,
  defaultErrorHandler,
  errorLogger,
  modelErrorHandler,
} from "./middlewares";
import { onAppListen } from "./helpers";
import { config, i18n } from "./config/index";

const app = express();
app.use(express.json());
app.use(i18n.init);
app.use(i18nHandler);
app.use(cors());

setupRoutes(app);

app.use(errorLogger);
app.use(modelErrorHandler);
app.use(defaultErrorHandler);

app.listen(config.PORT, () => onAppListen(config.PORT));
