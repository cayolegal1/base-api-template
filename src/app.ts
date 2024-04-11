import cors from "cors";
import express from "express";
import { setupRoutes } from "./routes";
import {
  i18nHandler,
  customErrorHandler,
  defaultErrorHandler,
  errorLogger,
  modelErrorHandler,
} from "./middlewares";
import { onAppListen } from "src/utils/helpers";
import { i18n } from "./i18n";
import { config } from "./config";
import "src/utils/auth/passport";
const app = express();
app.use(express.json());
app.use(cors());
app.use(i18n.init);
app.use(i18nHandler);

setupRoutes(app);

app.use(errorLogger);
app.use(modelErrorHandler);
app.use(customErrorHandler);
app.use(defaultErrorHandler);

app.listen(config.PORT, () => onAppListen(config.PORT));
