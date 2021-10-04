import jwt from "jsonwebtoken";
import keys from "../../../config/keys.js";
import errorHandler from "../utils/errorHandler.js";
import UserService from "../services/UserService.js";

export default function admin(req, res, next) {

  try {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
    // console.log(token);
    if(!token) { return res.status(401).json({success: false, message: "Please Login !"}) }

    jwt.verify(token, keys.ADMIN_ACCESS_TOKEN_SECRET, async (err, payload) => {

      if(err) { return res.status(401).json({success: false, message: "Please Login !"}) }

      const user = await UserService.getById(payload.id, "-password");

      if(!user) { return res.status(400).json({success: false, message: "This does not exist"}); };

      if(user.role === 'user') { return res.status(400).json({success: false, message: "You Are Not Access"}) }
      
      req.admin = user;
      next();
    })
  } catch(err) {
    errorHandler(res, err);
  }
}