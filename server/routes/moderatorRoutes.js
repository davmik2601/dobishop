import AdminController from "../api/v1/controllers/admin/AdminController.js";
import UserController from "../api/v1/controllers/user/UserController.js";
import admin from "../api/v1/middlewares/admin.js";
import auth from "../api/v1/middlewares/auth.js";

const routes = [
  {
    prefix: 'modearator',
    path: '/dashboard',
    method: 'post',
    // action: AdminController.???,
  },

];

export default routes;