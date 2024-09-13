import "./Projectheading.css";
import Projectbtn from "../Projectbtn/Projectbtn";

const Projectheading = ({ heading, description }) => {
  return (
    <div className="project-detail">
      <h1>{heading}</h1>
      <div>
        <Projectbtn />
      </div>
    </div>
  );
};

export default Projectheading;
