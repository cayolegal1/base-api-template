import express from "express";
import passport from "passport";
import { createToken } from "src/utils/auth";

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    try {
      const user = req.user;
      const token = createToken({ id: 400, role: "guest" });
      res.json({ user, token });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
