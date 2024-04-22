import { Strategy } from "passport-local";
import { UnauthorizedError } from "src/utils/errors";

const user = { name: "Jazmin", id: "400", role: "customer" };

export const LocalStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    try {
      if (!email || !password) {
        throw new UnauthorizedError({ message: "Invalid credentials" });
      }

      done(null, { ...user, email });
    } catch (error) {
      done(error, null);
    }
  },
);
