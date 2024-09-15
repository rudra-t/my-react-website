import "./Service.css";
import ServiceHeading from "./ServiceHeading/ServiceHeading";
import SubService from "./SubService/subService";
import SubServiceImg1 from "./SubService/SubServiceImg/Img/Service1.svg";
import SubServiceImg2 from "./SubService/SubServiceImg/Img/Service2.svg";
import SubServiceImg3 from "./SubService/SubServiceImg/Img/Service3.svg";

const Service = ({ imgsrc, heading, description }) => {
  return (
    <div className="Container" id="Service">
      <ServiceHeading />
      <div className="services">
        <SubService
          imgsrc={SubServiceImg1}
          heading="Options trader"
          description="Providing insights into stock trading based on my experience."
        />
        <SubService
          imgsrc={SubServiceImg3}
          heading="Web Developer"
          description="I can make a website for a business or indivisual as to get presence online"
        />
      </div>
    </div>
  );
};

export default Service;
