import "./AboutHeading.css";
import SubAbout1 from "./SubAbout1/SubAbout1";

const AboutHeading = ({heading, description}) => {
  return (
    <div className="About-1">
      <h2>About Me</h2>
      <p className="about-para">
        I am a passionate front-end developer experience in designing and
        developing responsive websites. Alongside, I actively trade in the stock
        market, using data-driven insights to make informed decisions.Building
        beautiful, responsive websites and navigating the stock market with
        precision.
      </p>
      <a href="src/img/Rudra.pdf" className="button">
        Download CV
      </a>
      <div className="Sub-About-Container">
        <SubAbout1 heading="Languages" description="HTML, CSS, JavaScript, React"/>
        <SubAbout1 heading="Education" description="Becholar Of Commerce"/>
        <SubAbout1 heading="Languages" description="HTML, CSS, JavaScript, React"/>
      </div>
    </div>
  );
};

export default AboutHeading;
