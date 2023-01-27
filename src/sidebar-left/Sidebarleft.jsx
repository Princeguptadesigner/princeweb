import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
const Sidebarleft = () => {
  return (
    <>
      <header className="header-left">
        <div className="header-scrollbar">
          <Header />
          <Menu />
        </div>
        <Footer />
      </header>
    </>
  );
};

export default Sidebarleft;