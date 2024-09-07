import React from 'react';
import "./Header.css";
import Hero from "./img/hero.svg";

function Header() {
  return (
    <div className='Header' id='Header'>
        <div className='Header-1'>
            <h2>Hello Everyone</h2>
            <p className='header-heading'>I, m Rudra Tiwari</p>
            <p className='header-para'>A Frontend Developer From India</p>
            <a href='#Portfolio' className='button'>My Portfolio</a>
        </div>
        <div className='Header-2'><img src={Hero} alt="#" /></div>
    </div>
  );
}

export default Header;