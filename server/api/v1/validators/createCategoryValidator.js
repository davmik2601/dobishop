import { check } from "express-validator";
import CategoryService from "../services/CategoryService.js";

const createCategoryValidator = [

  check('name')
    .exists().bail()
    .notEmpty()
      .withMessage('Category Name Can Not Be Empty').bail()
    .custom(async val => {
      try {
        const data = await CategoryService.getByName(val);
        if(data) {
          return Promise.reject('Category in this Name is already exist');
        }
      } catch (err) {
        throw new Error(err);
      }
    }),
];

export default createCategoryValidator;