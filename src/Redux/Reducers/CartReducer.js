import { ActionTypes } from "../Constants/ActionTypes";
const intialState = {
  cartList: [],
};

export const cartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      return { ...state, cartList: [...payload] };
    default:
      return state;
  }
};
