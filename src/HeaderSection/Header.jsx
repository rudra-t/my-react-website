import "./Header.css";
import Header2 from "./Header2/Header2";
import Header1 from "./Header1/Header1";

const Header = () => {
  return (
    <div className="Container" id="Header">
      <div className="Header-Row">
        <Header1 />
        <Header2 />
      </div>
    </div>
  );
};

export default Header;
