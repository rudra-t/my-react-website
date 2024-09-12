import "./Service.css";
import ServiceHeading from "./ServiceHeading/ServiceHeading";
import SubService from "./SubService/subService";
import SubServiceImg1 from "./SubService/SubServiceImg/Img/Service1.svg";
import SubServiceImg2 from "./SubService/SubServiceImg/Img/Service2.svg";
import SubServiceImg3 from "./SubService/SubServiceImg/Img/Service3.svg";

const Service = ({ imgsrc, heading, description }) => {
  return (
    <div className="Service-container" id="Service">
      <ServiceHeading />
      <div className="services">
        <SubService
          imgsrc={SubServiceImg1}
          heading="Options trader"
          description="I m a options trader who can help you to gain knowledge about stock market"
        />
        <SubService
          imgsrc={SubServiceImg2}
          heading="Insurance Adviser"
          description="I m also a part working agent of LIC i can help you to get a desired insurance"
        />
        <SubService
          imgsrc={SubServiceImg3}
          heading="Web Developer"
          description="I can make awebsite for a business or indivisual as to get presence online"
        />
      </div>
    </div>
  );
};

export default Service;
