import "./subService.css";
import SubServiceImg from "./SubServiceImg/subServiceImg";
import SubServiceDetail from "./SubServiceHeading/SubServiceDetail";
import subServiceBtn from "./SubServiceBtn/subServiceBtn";

const SubService = (imgsrc, heading, description) => {
  return (
    <div className="sub-service">
      <div className="sub-service-2">
        <SubServiceImg imgsrc={imgsrc} />
        <SubServiceDetail heading={heading} description={description} />
        <subServiceBtn />
      </div>
    </div>
  );
};

export default SubService;
