import { setAlert } from "./alertAction";
import { clearValidationErrors } from "./validationErrorsAction";

export const MESSAGE_TYPES = {
  ERROR_MESSAGE: 'ERROR_MESSAGE',
  SUCCESS_MESSAGE: 'SUCCESS_MESSAGE',
  CLEAR_MESSAGE: 'CLEAR_MESSAGE',
  VALIDATION_ERRORS: 'VALIDATION_ERRORS',
  CLEAR_VALIDATION_ERRORS: 'CLEAR_VALIDATION_ERRORS',
};


export const setMessage = (success = true, title, message="None to show") => async (dispatch) => {
  success && dispatch(clearValidationErrors(title));
  dispatch({
    type: success ? MESSAGE_TYPES.SUCCESS_MESSAGE : MESSAGE_TYPES.ERROR_MESSAGE,
    payload: {
      [title]: { title, success, message }
    }
  });
  dispatch(setAlert(success, message));
};

export const clearMessage = (title) => async (dispatch) => {
  dispatch({ 
    type: MESSAGE_TYPES.CLEAR_MESSAGE,
    payload: title
  });
};