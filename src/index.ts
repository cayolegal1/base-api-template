import cors from "cors";
import express from "express";
import { setupRoutes } from "./routes";
import { config } from "./config";

const app = express();
app.use(cors());

setupRoutes(app);

app.listen(config.PORT, () => {
  console.log(`Server listening on Port ${config.PORT}`)
});

