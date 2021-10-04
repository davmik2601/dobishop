import AdminController from "../api/v1/controllers/admin/AdminController.js";
import productController from "../api/v1/controllers/product/ProductController.js";
import UserController from "../api/v1/controllers/user/UserController.js";

const routes = [
  {
    prefix: 'shop',
    path: '/',
    method: 'get',
    action: productController.getAllProducts(),
  },
];

export default routes;