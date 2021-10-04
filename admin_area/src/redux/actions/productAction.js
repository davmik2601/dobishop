import axios from "axios";
import { API_URL } from "../../config/env";
import Api from "../../utils/Api"

export const PRODUCT_TYPES = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  ADD_PRODUCT: 'ADD_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
}



export const addProduct = (productData) => async (dispatch) => {

  try {
    const res = await axios.post(`${API_URL}/api/v1/admin/product`, productData, 
      {
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization: `Bearer ${sessionStorage.getItem('admin_token') || null}`
        }
      }
    );
 
    console.log(res);
    
  } catch (err) {
    console.log(err.response);
  }
}