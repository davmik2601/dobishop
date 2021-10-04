import { combineReducers } from "redux";
import auth from './authReducer';
import loading from './loadingReducer';
import category from './categoryReducer';
import messages from './alerts/messageReducer';
import users from './userReducer';
import alert from './alerts/alertReducer';
import validation from './alerts/validationErrorsReducer';
import product from './productReducer';
import addPrTemp from './addProductTempReducer';

export default combineReducers({
  auth,
  loading,
  category,
  messages,
  users,
  alert,
  validation,
  product,
  addPrTemp,
});