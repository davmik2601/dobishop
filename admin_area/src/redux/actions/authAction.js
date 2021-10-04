import { GLOBAL_TYPES } from "./globalTypes";
import Api from "../../utils/Api";
import { setMessage } from "./alerts/messageAction";
import { endLoading, startLoading } from "./loadingAction";


export const login = (userData) => async (dispatch) => {

  try {
    dispatch(startLoading());

    const res = await Api.post('login', userData);
    
    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: {
        token: res.data.token,
        user: res.data.user,
      }
    });

    sessionStorage.setItem('admin_token', res.data.token);

    dispatch(setMessage(true, "You are logined Successfully", "login"));

    window.location.replace('/admin/dashboard');

  } catch (err) {
    dispatch(setMessage(false, err.response.data.message, "login"));
    dispatch(endLoading());
  }
}


export const me = () => async (dispatch) => {

  try {
    dispatch(startLoading());

    const res = await Api.get('me');

    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: {
        token: res.data.token,
        user: res.data.user,
      }
    });

    dispatch(endLoading());

  } catch (err) {
    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: {}
    });
    dispatch(setMessage(false, err.response));
    dispatch(endLoading());
  }
}


export const logout = () => async (dispatch) => {

  try {
    dispatch(startLoading());;

    dispatch({
      type: GLOBAL_TYPES.AUTH,
      payload: {}
    });

    sessionStorage.removeItem("admin_token");

    window.location.replace("/admin/login");

  } catch (err) {
    dispatch(setMessage(false, err.response.message))
  }
}