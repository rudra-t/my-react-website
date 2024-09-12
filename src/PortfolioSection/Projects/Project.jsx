import "./Project.css";
import Projectimg from "./Projectimg/Projectimg";
import Projectbtn from "./Projectbtn/Projectbtn";
import Projectheading from "./Projectheading/Projectheading";

const Project = ({ imgsrc, heading, description }) => {
  return (
    <div className="project">
      <Projectimg imgsrc={imgsrc} />
      <Projectheading heading={heading} description={description} />
      <div>
        <Projectbtn />
      </div>
    </div>
  );
};

export default Project;
