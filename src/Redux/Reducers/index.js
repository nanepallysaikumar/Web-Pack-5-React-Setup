import { productsReducer } from "./ProductReducers";
import { cartReducer } from "../Reducers/CartReducer";

const reducers = {
  allProducts: productsReducer,
  cart: cartReducer,
};
export default reducers;
