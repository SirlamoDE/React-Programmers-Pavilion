import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">The Programmer's Store</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/products">Products</a>
        </li>
        <li className="nav-item">
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;