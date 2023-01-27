import React from "react";
import princelogo from "../images/prince-kumar-gupta.jpeg";

const Header = () => {
  return (
    <>
      <div className="header-top">
        <div className="header-logo">
          <img src={princelogo} alt="Prince Kumar Gupta" />
        </div>
        <div className="header-logo-name">Prince Gupta</div>
      </div>
    </>
  );
};

export default Header;