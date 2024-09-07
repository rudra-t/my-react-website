import React from 'react';
import "./About.css";
import Aboutimg from "./img/about.svg";

function About() {
  return (
    <div className='About' id='About'>
       <div className='About-2'><img src={Aboutimg} alt="#" /></div>
        <div className='About-1'>
            <h2>About Me</h2>
            <p className='about-heading'>Enhancing Your Online Presence</p>
            <p className='about-para'>I m a commerce graduate also a freelancer getting knowledge about industry to get a presence in online world. I ahve startedmy journey last year in that year i ahve worked some projects.</p>
            <a href='#Portfolio' className='button'>Download CV</a>
        </div>
    </div>
  );
}

export default About;