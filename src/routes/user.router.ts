import express from "express";
import { modelValidator } from "@middlewares/index";
import { userSchema, getUserSchema } from "@schemas/index";
import { STATUS_CODE } from "src/constants";

const router = express.Router();

router.get(
  "/:id",
  modelValidator(getUserSchema, "params"),
  (req, res, next) => {
    try {
      const params = req.params;
      res.status(STATUS_CODE.OK).json(params);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  "/create",
  modelValidator(userSchema, "body"),
  (req, res, next) => {
    try {
      const body = req.body;
      res.status(STATUS_CODE.OK).json(body);
    } catch (error) {
      next(error);
    }
  },
);


router.patch(
  "/update/:id",
  modelValidator(getUserSchema, "params"),
  modelValidator(userSchema, "body"),
  (req, res, next) => {
    try {
      const body = req.body;
      res.status(STATUS_CODE.OK).json(body);
    } catch (error) {
      next(error);
    }
  }
)



export default router;


