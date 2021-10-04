export const LOADING_TYPES = {
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
}

export const startLoading = () => (dispatch) => {
  dispatch({ type: LOADING_TYPES.START_LOADING });
}

export const endLoading = () => (dispatch) => {
  dispatch({ type: LOADING_TYPES.END_LOADING });
}