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
      const { id } = req.params;
      res.status(STATUS_CODE.OK).json({ success: true, id });
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
      res.status(STATUS_CODE.CREATED).json({ success: true, body });
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
      res.status(STATUS_CODE.OK).json({ success: true, body });
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  "/delete/:id",
  modelValidator(getUserSchema, "params"),
  (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(STATUS_CODE.OK).json({ success: true, id });
    } catch (error) {
      next(error);
    }
  },
);

export default router;


