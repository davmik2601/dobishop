import User from '../models/User.js';

class UserService {
  constructor() {  }

  register = async (candedate) => {
    const user = new User(candedate);
    await user.save();
    return user;
  }

  getById = async (id, noSelected = '') => {
    const user = await User.findById(id).select(noSelected);
    return user;
  }

  getByEmail = async (email, noSelected = '') => {
    const user = await User.findOne({email}).select(noSelected);
    return user;
  }
}

export default new UserService;