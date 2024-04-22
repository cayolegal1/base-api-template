import { Strategy, ExtractJwt } from "passport-jwt";
import { config } from "src/config";

export const JWTStrategy = new Strategy({
  secretOrKey: config.SECRET_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}, () => {
  
});