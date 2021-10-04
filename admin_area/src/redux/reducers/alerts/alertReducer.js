import { ALERT_TYPES } from "../../actions/alerts/alertAction";


const initialState = {};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ALERT_TYPES.SUCCEESS_ALERT):
      return action.payload;
    case (ALERT_TYPES.ERROR_ALERT):
      return action.payload;
    case (ALERT_TYPES.CLEAR_ALERT):
      return {};
    default:
      return state;
  }
};

export default alertReducer;