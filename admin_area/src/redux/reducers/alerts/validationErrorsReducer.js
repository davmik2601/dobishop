import { VALIDATION_ERRORS_TYPES } from "../../actions/alerts/validationErrorsAction";



const initialState = {};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case (VALIDATION_ERRORS_TYPES.SET_ERRORS):
      return {...state, ...action.payload};
    case (VALIDATION_ERRORS_TYPES.CLEAR_ERRORS):
      delete state[action.payload];
      return state;
    default:
      return state;
  }
};

export default alertReducer;