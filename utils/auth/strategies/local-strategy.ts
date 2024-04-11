import { Strategy } from "passport-local";

export const localStrategy = new Strategy({
  usernameField: "email",
  passwordField: "password",
}, (email, password, done) => {
  try {
    if (!email || !password) {
      
    }
  } catch(error) {
    done(error, null);
  }
})