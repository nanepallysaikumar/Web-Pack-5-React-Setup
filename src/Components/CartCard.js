import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Actions/CartActions";
import remove from "../images/remove.png";

const CartCard = (data) => {
  const { image, title, price } = data;
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);

  const removeProduct = (data) => {
    const updatedCartList = cartList.filter((item) => item.id !== data.id);
    dispatch(removeFromCart(updatedCartList));
  };

  return (
    <div className="cart">
      <div>
        <img src={image} height="150" width="150" />
      </div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>$ {price}</p>
      </div>
      <div>
        <img src={remove} height="30" onClick={() => removeProduct(data)} />
      </div>
    </div>
  );
};

export { CartCard };
