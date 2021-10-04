import Api from "../../utils/Api";
import { setMessage } from "./alerts/messageAction";
import { setValidationErrors } from "./alerts/validationErrorsAction";
import { endLoading, startLoading } from "./loadingAction";
import { setAlert } from "./alerts/alertAction";

export const CATEGORY_TYPES = {
  GET_CATEGORIES: 'GET_CATEGORIES',
  ADD_CATEGORY: 'ADD_CATEGORY',
}


export const getCategories = () => async (dispatch) => {

  try {
    dispatch(startLoading());

    const res = await Api.get('category');

    dispatch({
      type: CATEGORY_TYPES.GET_CATEGORIES,
      payload: {
        categories: res.data.categories,
      }
    });

    dispatch(endLoading());
    
  } catch (err) {
    console.log(err.response.data);
    dispatch(setAlert(false, err.response.data.message));
    dispatch(endLoading());
  }
}


export const addCategory = (categoryData) => async (dispatch) => {

  try {
    dispatch(startLoading());

    const createdData = await Api.post('category', categoryData);

    const res = await Api.get('category');

    dispatch({
      type: CATEGORY_TYPES.GET_CATEGORIES,
      payload: {
        categories: res.data.categories,
      }
    });

    dispatch(setMessage(true, "addCategory", `/ ${createdData.data.category.name} / կատեգորիան բարեհաջող ավելացված է․`));

    dispatch(endLoading());
    
  } catch (err) {
    console.log(err.response);
    dispatch(setAlert(false, err.response.data.errors ? "Validation Error" : err.response.data.message));
    err.response.data.errors && dispatch(setValidationErrors("addCategory", err.response.data.errors));
    dispatch(endLoading());
  }
}


export const deleteCategory = (id) => async (dispatch) => {

  try {
    dispatch(startLoading());

    const deletedCategoryData = await Api.delete(`category/${id}`);

    dispatch(setMessage(true, "deleteCategory", `/ ${deletedCategoryData.data.deletedCategory.name} / կատեգորիան բարեհաջող հեռացված է․`));

    const res = await Api.get('category');

    dispatch({
      type: CATEGORY_TYPES.GET_CATEGORIES,
      payload: {
        categories: res.data.categories,
      }
    });

    dispatch(endLoading());
    
  } catch (err) {
    console.log(err.response.data);
    dispatch(setMessage(false, "deleteCategory", err.response.data.message));
    dispatch(endLoading());
  }
}


export const addSubCategory = (categoryData) => async (dispatch) => {

  try {
    dispatch(startLoading());

    const createdData = await Api.post('category', categoryData);

    const res = await Api.get('category');

    dispatch({
      type: CATEGORY_TYPES.GET_CATEGORIES,
      payload: {
        categories: res.data.categories,
      }
    });

    dispatch(setMessage(true, "addSubCategory", `/ ${createdData.data.category.name} / Ենթակատեգորիան բարեհաջող ավելացված է․`));

    dispatch(endLoading());
    
  } catch (err) {
    console.log(err.response.data)
    dispatch(setAlert(false, err.response.data.message));
    err.response.data.errors && dispatch(setValidationErrors("addSubCategory", err.response.data.errors));
    dispatch(endLoading());
  }
}