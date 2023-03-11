import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Product } from "./Pages/Products";
import { Cart } from "./Pages/Cart";
import { Forum } from "./Pages/Forum";
import { News } from "./Pages/News";
import { ProductDetails } from "./Pages/ProductDetails";
import { SignIn } from "./Pages/SignIn";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/news" element={<News />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
