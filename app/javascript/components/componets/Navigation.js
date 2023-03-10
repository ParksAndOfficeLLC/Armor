import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <a href="/users/sign_up">Sign UP</a>
          </li>
          <li>
            <a href="/users/sign_in">Login</a>
          </li>
          <li>
            <a href="/users/sign_out">Log Out</a>
          </li>
          <li>
            <NavLink to="/productsindex">Products</NavLink>
          </li>
          <li>
            <NavLink to="/productsnew">Add New Products</NavLink>
          </li>
          <li>
            <NavLink to="/ordersprotectedindex">Your Orders</NavLink>
          </li>
          <li>
            <NavLink to="/ordersnew">Create Orders</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
