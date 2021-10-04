import Api from "../../utils/Api";
import { endLoading, startLoading } from "./loadingAction";
import { setMessage } from "./alerts/messageAction";


export const USER_TYPES = {
  GET_USERS: 'GET_USERS',
  GET_TEAM: 'GET_TEAM',
  ADD_TO_TEAM: 'ADD_TO_TEAM',
  REMOVE_FROM_TEAM: 'REMOVE_FROM_TEAM',
};


export const getUsers = (searchData) => async (dispatch) => {

  try {
    
  } catch (err) {
    dispatch(setMessage(false, err.response.data.message));
    dispatch(endLoading());
  }
};

export const getTeam = () => async (dispatch) => {

  try {
    dispatch(startLoading());

    const res = await Api.get('team');

    dispatch({
      type: USER_TYPES.GET_TEAM,
      payload: res.data.team
    });

    dispatch(endLoading());

  } catch (err) {
    dispatch(setMessage(false, err.response.data.message));
    dispatch(endLoading());
  }
};