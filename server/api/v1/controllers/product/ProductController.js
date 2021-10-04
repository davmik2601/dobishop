import errorHandler from "../../utils/errorHandler.js";


class ProductController {
  constructor() {  }

  getAllProducts = async (req, res) => {
    
  }


  create = async (req, res) => {

    try {
      console.log("Body - ", req.body);
      console.log("FILES - ", req.files);
      
      let newProduct = {
        name: req.body.name,
        price: req.body.price,
        count: req.body.count,
        description: req.body.description,
      }

    } catch (err) {
      errorHandler(res, err);
    }
  }
}

export default new ProductController;