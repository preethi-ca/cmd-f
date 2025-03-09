import React from "react";
import { Link } from "react-router-dom"; // For navigation between pages
import "./Navbar.css"; // Optional: Add styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Dream Dashboard</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;