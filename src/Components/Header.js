import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/shopltstlogo.png";

const Header = () => {
  return (
    <nav class="navbar">
      <Link to="/" class="logo">
        <img src={logo} />
      </Link>
      <ul class="nav-links">
        <li class="nav-item">
          <Link to="/cart">Cart Items</Link>
        </li>
        <li class="nav-item">
          <Link to="/forum">Forum</Link>
        </li>
        <li class="nav-item">
          <Link to="/news">News</Link>
        </li>
        <li class="nav-item">
          <Link to="/sign-in">Sign in</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Header };
