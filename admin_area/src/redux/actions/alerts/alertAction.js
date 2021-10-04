

export const ALERT_TYPES = {
  SUCCEESS_ALERT: 'SUCCEESS_ALERT',
  ERROR_ALERT: 'ERROR_ALERT',
  CLEAR_ALERT: 'CLEAR_ALERT',
}

export const setAlert = (success = true, message = "None to Show") => (dispatch) => {
  dispatch({
    type: success ? ALERT_TYPES.SUCCEESS_ALERT : ALERT_TYPES.ERROR_ALERT,
    payload: { success, message }
  });
};

export const clearAlert = () => (dispatch) => {
  dispatch({ type: ALERT_TYPES.CLEAR_ALERT });
};