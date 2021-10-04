import { validationResult } from "express-validator";
import CategoryService from "../../services/CategoryService.js";
import errorHandler from "../../utils/errorHandler.js";


class CategoryController {
  constructor() {  }

  create = async (req, res) => {

    try {
      const errorData = validationResult(req).errors;
      let errors = {}
      if(errorData[0]) {
        errorData.forEach(e => {
          errors[e.param] = e.msg;
        });
        return res.status(400).json({success: false, errors: errors});
      };

      const newCategory = {
        name: req.body.name,
      };
      if(req.body.parent) { newCategory.parent = req.body.parent; };

      const category = await CategoryService.create(newCategory);

      return res.json({success: true, category});

    } catch (err) {
      errorHandler(res, err);
    }
  }

  getAll = async (req, res) => {

    try {
      const categories = await CategoryService.getAll();

      return res.json({success: true, categories});

    } catch (err) {
      errorHandler(res, err);
    }
  }

  deleteById = async (req, res) => {
    
    try {
      const deletedCategory = await CategoryService.deleteById(req.params.id);
      
      return res.json({success: true, deletedCategory});

    } catch (err) {
      errorHandler(res, err);
    }
  }
}

export default new CategoryController;