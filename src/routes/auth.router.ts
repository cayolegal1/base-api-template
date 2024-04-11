import express from "express";
import passport from "passport";

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    try {
      res.send("success");
    } catch(error) {
      next(error);
    }
  }
);

export default router;