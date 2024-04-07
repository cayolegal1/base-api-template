import express from "express";
import { modelValidator } from "@middlewares/index";
import { userSchema } from "@schemas/index";

const router = express.Router();

router.get("/:id", (request, response) => {
  response.send(request.params.id)
});

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


