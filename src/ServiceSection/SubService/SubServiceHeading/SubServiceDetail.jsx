import "./SubServiceDetail.css";

const SubServiceDetail = ({ heading, description, }) => {
  return (
    <div className="sub-service-detail">
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SubServiceDetail;
