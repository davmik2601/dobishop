import { USER_TYPES } from "../actions/userAction";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPES.GET_USERS:
      return action.payload;
    case USER_TYPES.GET_TEAM:
      return {...state, team: action.payload};
    case USER_TYPES.ADD_TO_TEAM:
      return action.payload;
    case USER_TYPES.REMOVE_FROM_TEAM:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;