import express from "express";
import passport from "passport";

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    try {
      res.send(req.user);
    } catch(error) {
      next(error);
    }
  }
);

router.get(
  "/test",
  (req, res, next) => {
    try {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<body>");
      res.write("<h1>Hola!</h1>");
      res.write("</body>");
      res.write("</html>");
      res.end();
    } catch(error) {
      next(error);
    }
  }
);

export default router;