import React from "react";
import "./Service.css";
import Serviceimg from "./img/hero.svg"

function Service() {
  return (
    <div className="Service-container" id="Service">
      <div className="Service-heading">
        <h1>What I AM</h1>
        <h2>I provided some awesome services</h2>
      </div>
      <div className="services">
          <div className="sub-service">
              <div className="sub-service-img"><img src={Serviceimg} /></div>
              <div className="sub-service-detail">
                <h2>Options Trader</h2>
                <p>
                  I m a options trader who can help you to get knowldge about stock market.
                </p>
              </div>
              <div className="sub-service-button"><a href="#" className="button">See More</a></div>
          </div>
          <div className="sub-service">
              <div className="sub-service-img"><img src={Serviceimg} /></div>
              <div className="sub-service-detail">
                <h2>Options Trader</h2>
                <p>
                  I m a options trader who can help you to get knowldge about stock market.
                </p>
              </div>
              <div className="sub-service-button"><a href="#" className="button">See More</a></div>
          </div>
          <div className="sub-service">
              <div className="sub-service-img"><img src={Serviceimg} /></div>
              <div className="sub-service-detail">
                <h2>Options Trader</h2>
                <p>
                  I m a options trader who can help you to get knowldge about stock market.
                </p>
              </div>
              <div className="sub-service-button"><a href="#" className="button">See More</a></div>
          </div>
        </div>
    </div>
  );
}
export default Service;
