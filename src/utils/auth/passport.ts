
import passport from "passport";
import { localStrategy } from "./strategies";
passport.use("local", localStrategy);
