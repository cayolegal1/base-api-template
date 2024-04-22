import express from "express";
import passport from "passport";
import { schemaValidator } from "@middlewares/index";
import { userSchema, getUserSchema } from "@schemas/index";
import { STATUS_CODE } from "src/utils/constants";

const router = express.Router();

router.get(
  "/:id",
  schemaValidator(getUserSchema, "params"),
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
  schemaValidator(userSchema, "body"),
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
  passport.authenticate("jwt", { session: false }),
  schemaValidator(getUserSchema, "params"),
  schemaValidator(userSchema, "body"),
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
  passport.authenticate("jwt", { session: false }),
  schemaValidator(getUserSchema, "params"),
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


