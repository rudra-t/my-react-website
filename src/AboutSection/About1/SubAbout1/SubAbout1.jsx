import "./SubAbout1.css"

const SubAbout1 = ({heading, description}) => {
    return ( 
        <div className="Sub-About">
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
     );
}
 
export default SubAbout1;