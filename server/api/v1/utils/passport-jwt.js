import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import keys from "../../../config/keys.js";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.USER_ACCESS_TOKEN_SECRET,
}

export default function passportJwt(passport) {
  
  passport.use(new JwtStrategy(opts, (payload, done) => {

    try {
      const user = User.findById(payload.id);
      if(user) {
        return done(null, user);
      }
      return done(null, false);

    } catch(err) {
      return done(err, false);
    }
  }));
}