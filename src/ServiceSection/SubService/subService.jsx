import "./subService.css";
import SubServiceImg from "./SubServiceImg/subServiceImg";
import SubServiceDetail from "./SubServiceHeading/SubServiceDetail";
import SubServiceBtn from "./SubServiceBtn/SubServiceBtn";
const SubService = ({ imgsrc, heading, description }) => {
  return (
    <div className="sub-service">
      <SubServiceImg imgsrc={imgsrc} />
      <SubServiceDetail heading={heading} description={description} />
      <SubServiceBtn />
    </div>
  );
};

export default SubService;
