import React from "react";
import { CartCard } from "../Components/CartCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartList);

  return (
    <div className="cart-list">
      <section className="cart-section">
        {cartList.length > 0 ? (
          cartList.map((item) => {
            return <CartCard {...item} key={item.id} />;
          })
        ) : (
          <p className="warning-msg">
            No Products Added to the Cart.Please Add.
          </p>
        )}
      </section>
    </div>
  );
};

export { Cart };
