import AdminController from "../api/v1/controllers/admin/AdminController.js";
import CategoryController from "../api/v1/controllers/product/categoryController.js";
import UserController from "../api/v1/controllers/user/UserController.js";

const routes = [
  {
    prefix: 'shop',
    path: '/category',
    method: 'get',
    action: CategoryController.getAll,
  },
];

export default routes;