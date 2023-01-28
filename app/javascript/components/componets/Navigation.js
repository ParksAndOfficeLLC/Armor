import React from 'react'
import ReactDOM from 'react-dom/client';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
  
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><a href="/users/sign_up">Sign UP</a></li>
        <li><a href="/users/sign_in">Login</a></li>
        <li><NavLink to="/productsindex">Products</NavLink></li>
      </ul>
    </nav>
  
    </div>
  )
}

export default Navigation
