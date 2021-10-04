import { clearMessage } from "./messageAction";


export const VALIDATION_ERRORS_TYPES = {
  SET_ERRORS: 'SET_ERRORS',
  CLEAR_ERRORS: 'CLEAR_ERRORS',
}


export const setValidationErrors = (title, errors) => async (dispatch) => {
  dispatch(clearMessage(title));
  dispatch({
    type: VALIDATION_ERRORS_TYPES.SET_ERRORS,
    payload: { 
      [title]: { errors }
    }
  });
};

export const clearValidationErrors = (title) => async (dispatch) => {
  dispatch({ 
    type: VALIDATION_ERRORS_TYPES.CLEAR_ERRORS,
    payload: title
  });
};