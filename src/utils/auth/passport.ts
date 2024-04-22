
import passport from "passport";
import { LocalStrategy, JWTStrategy } from "./strategies";
passport.use("local", LocalStrategy);
passport.use("jwt", JWTStrategy);
