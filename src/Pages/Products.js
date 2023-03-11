import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../Redux/Actions/ProductActions";
import { ProductCard } from "../Components/ProductCard";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
      <ProductCard />
  );
};

export { Product };
