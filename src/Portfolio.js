import React from "react";
import "./Portfolio.css";
import Pimg from "./img/login.png"
import Pimg2 from "./img/CCTV.png"
import Pimg3 from "./img/port.jpg"

function Portfolio() {
  return (
    <div className="Portfolio-container" id="Portfolio">
      <div className="Portfolio-heading">
        <h1>My Projects</h1>
        <h2>I have recently completed some projects</h2>
      </div>
      <div className="Portfolio-section">
          <div className="project">
            <div className="project-img"><img src={Pimg3} /></div>
            <div className="project-detail">
            <h2>Login Page</h2>
            <p>
            </p>
            </div>
            <div className="project-button">
            <a href="#" className="button">Get Code</a>
            </div>
          </div>
          <div className="project">
            <div className="project-img"><img src={Pimg2} /></div>
            <div className="project-detail">
            <h2>Login Page</h2>
            <p>
            </p>
            </div>
            <div className="project-button">
            <a href="#" className="button">Get Code</a>
            </div>
          </div>
          <div className="project">
            <div className="project-img"><img src={Pimg} /></div>
            <div className="project-detail">
            <h2>Login Page</h2>
            <p>
            </p>
            </div>
            <div className="project-button">
            <a href="#" className="button">Get Code</a>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Portfolio;
