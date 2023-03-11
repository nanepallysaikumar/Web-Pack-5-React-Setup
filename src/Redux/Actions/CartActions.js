import { ActionTypes } from "../Constants/ActionTypes";

const addToCart = (product) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: product,
});

const removeFromCart = (product) => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
  payload: product,
});

export { addToCart, removeFromCart };
