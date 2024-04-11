import { Strategy } from "passport-local";
import { globalMessage } from "src/i18n";
import { CustomError } from "src/utils/errors";

export const LocalStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    try {
      if (!email || !password || password !== "hola") {
        throw new CustomError({
          message: globalMessage.invalid_credentials,
          name: "Unauthorized Error",
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