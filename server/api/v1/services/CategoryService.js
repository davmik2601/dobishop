import Category from '../models/Category.js';

class CategoryService {
  constructor() {  }

  create = async (data) => {
    const category = new Category(data);
    await category.save();
    return category;
  }

  getAll = async (noSelected = '') => {
    // const categories = await Category.find().select(noSelected);
    const categories = await Category.aggregate([
      {
          $sort: { order: 1 }
      },
      {
        $graphLookup: {
          from: 'categories',
          startWith: '$_id',
          connectFromField: '_id',
          connectToField: 'parent',
          as: 'subCategories'
        }
      },
      {
        $match: {
          parent: null
        }
      }
    ]);
    return categories;
  }
  
  deleteById = async (id) => {
    const deletedCategory = await Category.findByIdAndDelete(id);
    return deletedCategory;
  }

  getByName = async (name, noSelected = '') => {
    const category = await Category.findOne({name}).select(noSelected);
    return category;
  }

  // delete = async (data) => {
  //   const deletedCategory = await Category.findOneAndDelete(data);
  //   return deletedCategory;
  // }


  // getById = async (id, noSelected = '') => {
  //   const user = await Category.findById(id).select(noSelected);
  //   return user;
  // }
}

export default new CategoryService;