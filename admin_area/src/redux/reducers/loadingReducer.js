import { LOADING_TYPES } from "../actions/loadingAction";

const initialState = false;

const loadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING_TYPES.START_LOADING:
      return true;
    case LOADING_TYPES.END_LOADING:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;