import React from "react";
// import { useState } from "react";

const Menu = () => {
  return (
    <>
      <div className="sidebar-menu nav nav-menu">
        <ul className="js-sidebar-menu">
          <li className="active">
            <a className="nav-link" href="#home">
              <i className="ti-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#about">
              <i className="ti-id-badge"></i>
              <span>About Us</span>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#services">
              <i className="ti-panel"></i>
              <span>Services</span>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#work">
              <i className="ti-bookmark-alt"></i>
              <span>Portfolio</span>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#blog">
              <i className="ti-layout-media-overlay-alt-2"></i>
              <span>Blogs</span>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#contactus">
              <i className="ti-map-alt"></i>
              <span>Contact Us</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;