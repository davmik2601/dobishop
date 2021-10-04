import errorHandler from "../../utils/errorHandler.js";
import createAccessToken from "../../utils/createAcessToken.js";
import keys from "../../../../config/keys.js";
import UserService from "../../services/UserService.js";
import bcrypt from 'bcrypt';
import AdminService from "../../services/AdminService.js";
import jwt from 'jsonwebtoken';

class AdminController {
  constructor() {  }

  login = async (req, res) => {

    try {
      const candetate = {
        email: req.body.email,
        password: req.body.password,
      };

      let user = await UserService.getByEmail(candetate.email);

      if(!user) {
        return res.status(400).json({success: false, message: "User Does Not Exist."});
      }
      if(!await bcrypt.compare(candetate.password, user.password)) {
        return res.status(401).json({success: false, message: "Password is Wrong."});
      }
      if(user.role === 'user') {
        return res.status(400).json({success: false, message: "You Are Not Access."});
      }
      
      user = await UserService.getById(user._id, '-password');

      const token = createAccessToken(keys.ADMIN_ACCESS_TOKEN_SECRET, {
        email: user.email,
        id: user._id,
        role: user.role
      });

      return res.json({success: true, user, token});

    } catch(err) {
      errorHandler(res, err);
    }
  }


  me = async (req, res) => {

    try {
      const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
  
      if(!token) { return res.status(401).json({success: false, message: "Please Login !"}) }
  
      jwt.verify(token, keys.ADMIN_ACCESS_TOKEN_SECRET, async (err, payload) => {
  
        if(err) { return res.status(401).json({success: false, message: "Please Login !"}) }
  
        const user = await UserService.getById(payload.id, "-password");
  
        if(!user) { return res.status(400).json({success: false, message: "This does not exist"}); };
  
        if(user.role === 'user') { return res.status(400).json({success: false, message: "You Are Not Access"}) }
        
        res.json({success: true, user, token});
      })
    } catch(err) {
      errorHandler(res, err);
    }
  }

  dashboard = async (req, res) => {
    
    return res.json({success: true, admin: {a:'admin'}})
  }

  getUsers = async (req, res) => {

    try {
      const users = await AdminService.getUsers('-password');
      return res.json({success: true, users});
    } catch (err) {
      errorHandler(res, err);
    }
  }

  getTeam = async (req, res) => {
    try {
      const team = await AdminService.getTeam('-password');
      return res.json({success: true, team});
    } catch (err) {
      errorHandler(res, err);
    }
  }
}

export default new AdminController;