import { CATEGORY_TYPES } from "../actions/categoryAction";


const initialState = {};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_TYPES.GET_CATEGORIES:
      return action.payload;
    case CATEGORY_TYPES.ADD_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;