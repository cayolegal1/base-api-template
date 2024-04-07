import express from "express";
import { schemaValidator } from "@middlewares/index";
import { userSchema } from "@schemas/index";

const router = express.Router();

router.get("/:id", (request, response) => {
  response.send(request.params.id)
});

router.post(
  "/create",
  schemaValidator(userSchema, "body"),
  (request, response) => {
    try {
      const body = request.body;
      response.json(body);
    } catch (error) {
      response.status(400).send({
        message: error.message,
      });
    }
  },
);

export default router;


