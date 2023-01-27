import React from "react";
import homebanner from "../images/prince-kumar-gupta.jpeg";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <section id="home" data-nav-tooltip="Home" className="pp-section pp-scrollable">
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Prince Kumar gupta</h1>
                  <p className="lead">
                    I Am Passionate
                    <Typewriter
                      options={{
                        strings: ['Web Designer', 'Developer', 'Freelancer'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </p>
                  <p className="desc">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src={homebanner} title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;