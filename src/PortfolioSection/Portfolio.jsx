import React from "react";
import "./Portfolio.css";
import Pimg from "./Projects/Projectimg/projectimg/login.png";
import Pimg2 from "./Projects/Projectimg/projectimg/CCTV.png";
import Pimg3 from "./Projects/Projectimg/projectimg/Finance.png";
import Pimg4 from "./Projects/Projectimg/projectimg/Ecommerce.png";
import PortfolioHeading from "./Portfolioheading/PortfolioHeading";
import Project from "./Projects/Project";

const Portfolio = ({imgsrc, heading, description}) => {
  return (
    <div className="Portfolio-container" id="Portfolio">
      <PortfolioHeading />
      <div className="Portfolio-section">
        <Project imgsrc={Pimg} heading="Login Page" description="Fully Functional login Page"/>
        <Project imgsrc={Pimg2} heading="CCTV Website" description="Fully Functional login Page"/>
        <Project imgsrc={Pimg3} heading="Finance Website" description="Fully Functional login Page"/>
        <Project imgsrc={Pimg4} heading="Ecommerce Website" description="Fully Functional login Page"/>
      </div>
    </div>
  );
};

export default Portfolio;
