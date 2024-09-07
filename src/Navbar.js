import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <div className='Nav'>
        <div className='Nav-brand'>Rudra</div>
        <div className='Nav-links'>
              <a href='#About'><li>About</li></a>
              <a href='#Service'><li>Services</li></a>
              <a href='#Portfolio'><li>Portfolio</li></a>
              <a href='#Footer'><li>Contact</li></a>
        </div>
        <i class="fa-solid fa-bars"></i>
    </div>
  );
}

export default Navbar;