import express from "express";
import { modelValidator, fieldValidator } from "@middlewares/index";
import { userSchema } from "@schemas/index";

const router = express.Router();

router.get(
  "/:email",
  fieldValidator(userSchema, "params", "email"),
  (request, response, next) => {
    try {
      const params = request.params;
      response.status(200).json(params);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  "/create",
  modelValidator(userSchema, "body"),
  (request, response, next) => {
    try {
      const body = request.body;
      response.status(200).json(body);
    } catch (error) {
      next(error);
    }
  },
);

export default router;


