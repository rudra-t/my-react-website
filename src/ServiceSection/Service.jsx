import "./Service.css";
import ServiceHeading from "./ServiceHeading/ServiceHeading";
import SubService from "./SubService/subService";
import SubServiceImg from "./SubService/SubServiceImg/Img/Personal data-pana.svg";

const Service = ({ imgsrc, heading, description }) => {
  return (
    <div className="Service-container" id="Service">
      <ServiceHeading />
      <div className="services">
        <SubService
          imgsrc={SubServiceImg}
          heading="khana"
          description="ksuhfhgsdabukhcbsdhvchsdvhj"
        />
        <SubService />
        <SubService />
      </div>
    </div>
  );
};

export default Service;
