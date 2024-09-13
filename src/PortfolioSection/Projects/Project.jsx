import "./Project.css";
import Projectimg from "./Projectimg/Projectimg";
import Projectheading from "./Projectheading/Projectheading";

const Project = ({ imgsrc, heading, description }) => {
  return (
    <div className="project">
      <Projectimg imgsrc={imgsrc} />
      <Projectheading heading={heading} description={description} />
    </div>
  );
};

export default Project;
