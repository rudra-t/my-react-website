import "./About.css";
import AboutHeading from "./About1/AboutHeading";
import AboutImg from "./About2/AboutImg";

const About = () => {
  return (
    <div className="Container" id="About">
      <div className="About-Row">
        <AboutImg />
        <AboutHeading />
      </div>
    </div>
  );
};

export default About;
