import React from "react";
import "./Footer.css";
import Form from "./footer1/Form";
import Sociallinks from "./footer2/Sociallink";
function Footer() {
  return (
    <div id="Footer" className="Container">
      <div className="Quete">
        <h1>Want to Connect</h1>
      </div>
      <div className="Footer">
        <Form />
        <Sociallinks />
      </div>
    </div>
  );
}
export default Footer;
