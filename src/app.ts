import cors from "cors";
import express from "express";
import { setupRoutes } from "./routes";
import { config } from "./config";
import { onListen } from "./helpers";

const app = express();
app.use(express.json());
app.use(cors());

setupRoutes(app);

app.listen(config.PORT, () => onListen(config.PORT));
