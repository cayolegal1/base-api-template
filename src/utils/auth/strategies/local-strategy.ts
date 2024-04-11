import { Strategy } from "passport-local";
import { globalMessage } from "src/i18n";
import { UnauthorizedError } from "src/utils/errors";

export const localStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    try {
      if (!email || !password || password !== "hola") {
        throw new UnauthorizedError({
          message: globalMessage.invalid_credentials,
          hasI18nSupport: true,
        });
      }

      const user = { name: "Jazmin", email: "jazmin@hotmail.com" };
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  },
);