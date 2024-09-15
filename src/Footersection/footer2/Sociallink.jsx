import React from "react";
import "./Sociallink.css";

const Sociallinks = () => {
  return ( 
    <div className="footer-2">
         <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100031116935428">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/rtiwari0/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/rudra-tiwari-219bb722b/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://discord.com/channels/@me">
                <i className="fa-brands fa-discord"></i>
              </a>
              <a href="https://github.com/rudra-t">
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