import React from "react";
import "./Sociallink.css";

const Sociallinks = () => {
  return ( 
    <div className="footer-2">
          <div className="social-links">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
          </div>
          <div>
            <p>Made By Rudra Tiwari</p>
            <p>Copyright2024 : All rights reserved</p>
          </div>
        </div>
   );
}
 
export default Sociallinks;