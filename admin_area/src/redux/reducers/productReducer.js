import { PRODUCT_TYPES } from "../actions/productAction";


const initialState = {};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPES.GET_PRODUCTS:
      return action.payload;
    case PRODUCT_TYPES.ADD_PRODUCT:
      return action.payload;
    case PRODUCT_TYPES.DELETE_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;