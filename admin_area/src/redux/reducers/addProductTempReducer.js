import { ADD_PRODUCT_TEMP_TYPES } from "../actions/addProductTempAction";


const initialState = {active: false, selectedCategories: [], files: []};

const addProductTempReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TEMP_TYPES.ACTIVATE_SELECT_CATEGORIES:
      return {...state, active: action.payload};
    case ADD_PRODUCT_TEMP_TYPES.ADD_SELECTED_CATEGORIES:
      return {...state, active: action.payload.active, selectedCategories: action.payload.selectedCategories};
    case ADD_PRODUCT_TEMP_TYPES.SET_PRODUCT_FILE:
      return {...state, files: action.payload.files};
    case ADD_PRODUCT_TEMP_TYPES.REMOVE_PRODUCT_FILE:
      return {...state, files: state.files.filter(f => f.id !== action.payload.idx)};
    default:
      return state;
  }
};

export default addProductTempReducer;