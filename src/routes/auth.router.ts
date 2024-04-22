import express from "express";
import passport from "passport";
import { createToken } from "src/utils/auth";
import type { JwtDecodedUser } from "src/types";

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    try {
      const user = req.user as JwtDecodedUser;
      const token = createToken({ user });
      res.json({ user, token });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
