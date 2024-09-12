import "./About.css";
import AboutHeading from "./About1/AboutHeading";
import AboutImg from "./About2/AboutImg";

const About = () => {
  return (
    <div className="About" id="About">
      <div className="About-row">
        <AboutHeading />
        <AboutImg />
      </div>
    </div>
  );
};

export default About;
