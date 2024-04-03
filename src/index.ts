import { PORT } from "./constants";
import cors from "cors";
import express from "express";
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`)
});

