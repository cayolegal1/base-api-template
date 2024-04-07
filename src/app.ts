import cors from "cors";
import express from "express";
import { setupRoutes } from "./routes";
import { errorHandler, errorLogger, modelErrorHandler } from "./middlewares";
import { onAppListen } from "./helpers";
import { config } from "./config";

const app = express();
app.use(express.json());
app.use(cors());

setupRoutes(app);

app.use(errorLogger);
app.use(modelErrorHandler);
app.use(errorHandler);

app.listen(config.PORT, () => onAppListen(config.PORT));
