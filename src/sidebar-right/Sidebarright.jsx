import React from "react";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
const Sidebarright = () => {
  return (
    <>
      <main className="sidebar-right">
        <Home />
        <Aboutus />
        <Services />
        <Portfolio />
        <Blog />
        <ContactUs />
      </main>
    </>
  );
};

export default Sidebarright;