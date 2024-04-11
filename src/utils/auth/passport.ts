
import passport from "passport";
import { LocalStrategy } from "./strategies";
passport.use("local", LocalStrategy);
