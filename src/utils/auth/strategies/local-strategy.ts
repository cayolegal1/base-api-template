import { Strategy } from "passport-local";
import { CustomError } from "src/utils/errors";

export const LocalStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    try {
      if (!email || !password) {
        throw new CustomError({
          message: "Invalid credentials",
          name: "Unauthorized Error",
        });
      }

      const user = { name: "Jazmin", email: "jazmin@hotmail.com" };
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  },
);