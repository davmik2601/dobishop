

export const ADD_PRODUCT_TEMP_TYPES = {
  ACTIVATE_SELECT_CATEGORIES: 'ACTIVATE_SELECT_CATEGORIES',
  ADD_SELECTED_CATEGORIES: 'ADD_SELECTED_CATEGORIES',
  SET_PRODUCT_FILE: 'SET_PRODUCT_FILE',
  REMOVE_PRODUCT_FILE: 'REMOVE_PRODUCT_FILE',
}


export const activateSelectCategories = (active) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_TEMP_TYPES.ACTIVATE_SELECT_CATEGORIES,
    payload: active,
  });
}

export const addSelectCategories = (ctgs) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_TEMP_TYPES.ADD_SELECTED_CATEGORIES,
    payload: {
      active: false,
      selectedCategories: ctgs,
    }
  });
}

export const setProductFiles = (files) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_TEMP_TYPES.SET_PRODUCT_FILE,
    payload: {
      files
    }
  });
}

export const removeProductFile = (idx) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_TEMP_TYPES.REMOVE_PRODUCT_FILE,
    payload: {
      idx
    }
  });
}

