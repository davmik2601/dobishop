import User from '../models/User.js';
import Product from '../models/Product.js';

class AdminService {
  constructor() {  }

  getUsers = async (noSelected = '') => {
    const users = await User.find({role: 'user'}).select(noSelected);
    return users;
  }

  getTeam = async (noSelected = '') => {
    const users = await User.find({$or:[{role: 'admin'}, {role: 'moderator'}]}).select(noSelected);
    return users;
  }

  addProduct = async (noSelected = '') => {
    
  }
}

export default new AdminService;