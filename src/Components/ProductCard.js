import React from "react";
import addcart from "../images/addcart.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Actions/CartActions";

export const ProductCard = () => {
  const products = useSelector((state) => state.allProducts.products);
  const cartProducts = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  const addProductsToCart = (product) => {
    if (!cartProducts.some((el) => el.id === product.id)) {
      cartProducts.push(product);
      dispatch(addToCart(cartProducts));
    }
  };

  const productList = products.map((product) => {
    const { title, image, price, id } = product;
    return (
      <section className="product-section">
        <div className="cart-icon">
          <img
            src={addcart}
            height="50"
            width="60"
            onClick={() => addProductsToCart(product)}
          />
        </div>
        <Link to={`/product/${id}`}>
          <div className="product-card">
            <div>
              <img className="product-img" src={image} />
            </div>
            <p className="product-price">$ {price}</p>
            <p>{title}</p>
          </div>
        </Link>
      </section>
    );
  });
  return <div className="products">{productList}</div>;
};
