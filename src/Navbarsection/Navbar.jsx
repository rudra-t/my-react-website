import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Container" id="Nav">
      <div className="Nav-brand">Rudra</div>
      <div className="Nav-links">
        <a href="#About">
          <li>About</li>
        </a>
        <a href="#Service">
          <li>Services</li>
        </a>
        <a href="#Portfolio">
          <li>Portfolio</li>
        </a>
        <a href="#Footer">
          <li>Contact</li>
        </a>
        <i className="fa-solid fa-bars"></i>
      </div>
      <a href="#Footer" className="button">Contact</a>
    </div>
  );
};

export default Navbar;
