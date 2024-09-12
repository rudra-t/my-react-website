import "./Projectheading.css";
const Projectheading = ({ heading, description }) => {
  return (
    <div className="project-detail">
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Projectheading;
