import UserController from "../api/v1/controllers/user/UserController.js";
import auth from "../api/v1/middlewares/auth.js";

const routes = [
  {
    prefix: 'user',
    path: '/my_account',
    method: 'get',
    action: UserController.my_account,
    middlewares: [auth]
  },

];

export default routes;