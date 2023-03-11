import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../Redux/Actions/ProductActions";
import { Spinner } from "../Components/Spinner";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.allProducts.productDetails);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(getProductDetails(productId));
    }
  }, [productId]);

  return Object.keys(product).length === 0 ? (
    <Spinner />
  ) : (
    <div className="product-container">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-content">
        <h1>{title}</h1>
        <p className="price">{price}$</p>
        <h3 className="category">{category}</h3>
        <p>{description}</p>
        <div className="addcart">Add to Cart</div>
      </div>
    </div>
  );
};

export { ProductDetails };
