import AdminController from "../api/v1/controllers/admin/AdminController.js";
import CategoryController from "../api/v1/controllers/product/CategoryController.js";
import ProductController from "../api/v1/controllers/product/ProductController.js";
import admin from "../api/v1/middlewares/admin.js";
import upload from "../api/v1/middlewares/upload.js";
import createCategoryValidator from "../api/v1/validators/createCategoryValidator.js";

const routes = [
  {
    prefix: 'admin',
    path: '/login',
    method: 'post',
    action: AdminController.login,
  },
  {
    prefix: 'admin',
    path: '/me',
    method: 'get',
    action: AdminController.me,
  },
  {
    prefix: 'admin',
    path: '/dashboard',
    method: 'get',
    action: AdminController.dashboard,
    middlewares: [admin],
  },
  {
    prefix: 'admin',
    path: '/users',
    method: 'get',
    action: AdminController.getUsers,
    middlewares: [admin],
  },
  {
    prefix: 'admin',
    path: '/team',
    method: 'get',
    action: AdminController.getTeam,
    middlewares: [admin],
  },
  {
    prefix: 'admin',
    path: '/category',
    method: 'post',
    action: CategoryController.create,
    validators: [createCategoryValidator],
    middlewares: [admin]
  },
  {
    prefix: 'admin',
    path: '/product',
    method: 'post',
    action: ProductController.create,
    middlewares: [upload.array('files')],
  },
  {
    prefix: 'admin',
    path: '/category',
    method: 'get',
    action: CategoryController.getAll,
    middlewares: [admin]
  },
  {
    prefix: 'admin',
    path: '/category/:id',
    method: 'delete',
    action: CategoryController.deleteById,
    middlewares: [admin]
  },
];

export default routes;