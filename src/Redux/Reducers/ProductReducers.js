import { ActionTypes } from "../Constants/ActionTypes";
const intialState = {
  products: [],
  productDetails: {},
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SET_PRODUCT_DETAILS:
      return { ...state, productDetails: payload };
    case ActionTypes.REMOVE_PRODUCT_DETAILS:
      return { ...state, productDetails: {} };
    default:
      return state;
  }
};
