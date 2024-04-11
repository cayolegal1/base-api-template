import { Strategy } from "passport-local";
import { UnauthorizedError } from "utils/errors";

export const localStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    try {
      if (!email || !password) {
        throw new UnauthorizedError();
      }

      const user = { name: "Jazmin", email: "jazmin@hotmail.com" };
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  },
);