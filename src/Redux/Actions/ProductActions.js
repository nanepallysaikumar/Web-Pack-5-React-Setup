import axios from "axios";
import { ActionTypes } from "../Constants/ActionTypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setProductDetails = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT_DETAILS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

export const removeProduct = () => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_DETAILS,
  };
};

export const getProducts = () => async (dispatch) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  dispatch(setProducts(response.data));
};

export const getProductDetails = (id) => async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  dispatch(setProductDetails(response.data));
};
