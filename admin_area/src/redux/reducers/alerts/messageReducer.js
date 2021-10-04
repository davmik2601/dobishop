import { MESSAGE_TYPES } from "../../actions/alerts/messageAction";

const initialState = {};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case (MESSAGE_TYPES.ERROR_MESSAGE):
      return {...state, ...action.payload};
    case (MESSAGE_TYPES.SUCCESS_MESSAGE):
      return {...state, ...action.payload};
    case (MESSAGE_TYPES.CLEAR_MESSAGE):
      delete state[action.payload];
      return {...state};
    default:
      return state;
  }
};

export default errorReducer;