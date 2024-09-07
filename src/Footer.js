import React from "react";
import "./Footer.css";

function Footer() {
  return (
  <div id="Footer">
        <div className="footer-1">
          <h3>Message Me</h3>
          <form action="mailto:rtiwari@gmail.com">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Enter Your Email...." required />
            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <input type="submit" value="Send" className="sendbtn" />
          </form>
        </div>
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
      </div>
      );
    }
    export default Footer;