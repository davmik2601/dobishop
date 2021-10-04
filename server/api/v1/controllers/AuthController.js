import { validationResult } from "express-validator";
import errorHandler from "../utils/errorHandler.js";
import bcrypt from 'bcrypt';
import createAccessToken from "../utils/createAcessToken.js";
import keys from "../../../config/keys.js";
import UserService from "../services/UserService.js";

class AuthController {
  constructor() {  }


  register = async(req, res) => {

    try {
      const errorData = validationResult(req).errors;
      let errors = {}
      if(errorData[0]) {
        errorData.forEach(e => {
          errors[e.param] = e.msg;
        });
        return res.status(400).json({success: false, errors: errors});
      };

      const candedate = {
        name: {
          first: req.body.firstName,
          last: req.body.lastName,
        },
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
      };

      const user = await UserService.register(candedate);

      return res.json({success: true, message: "Check you Email Box for Confirm"});

    } catch (err) {
      console.log(err);
      errorHandler(res, err);
    }
  }


  login = async(req, res) => {
    
    try {
      const candetate = {
        email: req.body.email,
        password: req.body.password,
      };
      let user = await UserService.getByEmail(candetate.email);

      if(!user) {
        return res.status(400).json({success: false, message: "User Does Not Exist."});
      }
      // if(user.accountConfirmation === false) {
      //   return res.status(400).json({success: false, message: "Before Login Confirm Your Email"});
      // }
      if(! await bcrypt.compare(candetate.password, user.password)) {
        return res.status(401).json({success: false, message: "Password Is Wrong."});
      }
      
      user = await UserService.getById(user._id, "-password");

      const token = createAccessToken(keys.USER_ACCESS_TOKEN_SECRET, {
        email: user.email,
        id: user._id,
        role: user.role
      });

      return res.json({success: true, user, token});

    } catch(err) {
      errorHandler(res, err);
    }
  }
}

export default new AuthController;