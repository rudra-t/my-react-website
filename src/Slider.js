import React from "react";
import "./Slider.css";
import Serviceimg from "./img/hero.svg"

function Slider() {
  return (
    <div className="Slider-container" id="Slider">
      <div className="Slider-heading">
        <h1>What I AM</h1>
        <h2>I provided some awesome services</h2>
      </div>
      <div className="sliders">
          <div className="sub-slider">
              <div className="sub-slider-img"><img src={Serviceimg} /></div>
              <div className="sub-slider-detail">
                <h2>Options Trader</h2>
                <p>
                  I m a options trader who can help you to get knowldge about stock market.
                </p>
              </div>
              <div className="sub-slider-button"><a href="#" className="button">See More</a></div>
          </div>
          <div className="sub-slider">
              <div className="sub-slider-img"><img src={Serviceimg} /></div>
              <div className="sub-slider-detail">
                <h2>Options Trader</h2>
                <p>
                  I m a options trader who can help you to get knowldge about stock market.
                </p>
              </div>
              <div className="sub-slider-button"><a href="#" className="button">See More</a></div>
          </div>
          <div className="sub-slider">
              <div className="sub-slider-img"><img src={Serviceimg} /></div>
              <div className="sub-slider-detail">
                <h2>Options Trader</h2>
                <p>
                  I m a options trader who can help you to get knowldge about stock market.
                </p>
              </div>
              <div className="sub-slider-button"><a href="#" className="button">See More</a></div>
          </div>
          <div className="sub-slider">
              <div className="sub-slider-img"><img src={Serviceimg} /></div>
              <div className="sub-slider-detail">
                <h2>Options Trader</h2>
                <p>
                  I m a options trader who can help you to get knowldge about stock market.
                </p>
              </div>
              <div className="sub-slider-button"><a href="#" className="button">See More</a></div>
          </div>
          <div className="sub-slider">
              <div className="sub-slider-img"><img src={Serviceimg} /></div>
              <div className="sub-slider-detail">
                <h2>Options Trader</h2>
                <p>
                  I m a options trader who can help you to get knowldge about stock market.
                </p>
              </div>
              <div className="sub-slider-button"><a href="#" className="button">See More</a></div>
          </div>
          <div className="sub-slider">
              <div className="sub-slider-img"><img src={Serviceimg} /></div>
              <div className="sub-slider-detail">
                <h2>Options Trader</h2>
                <p>
                  I m a options trader who can help you to get knowldge about stock market.
                </p>
              </div>
              <div className="sub-slider-button"><a href="#" className="button">See More</a></div>
          </div>
        </div>
    </div>
  );
}
export default Slider;
