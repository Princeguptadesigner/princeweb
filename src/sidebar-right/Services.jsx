import React from "react";
import Testimonials from "./Testimonials";
const Services = () => {
  const servicesdata = [
    {
      icons: 'icon-mobile',
      title: 'Web Design',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      icons: 'icon-desktop',
      title: 'Web Development',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      icons: 'icon-target',
      title: 'SEO Marketing',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },

    {
      icons: 'icon-mobile',
      title: 'Web Design',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      icons: 'icon-desktop',
      title: 'Web Development',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      icons: 'icon-target',
      title: 'SEO Marketing',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
  ];
  return (
    <>
      <section id="services" data-nav-tooltip="Services" className="pp-section pp-scrollable section">
        <div className="container">
          <div className="title">
            <h3>What I do?</h3>
          </div>
          <div className="row">
            {servicesdata.map((val, ind) => (
              <div className="col-sm-6 m-15px-tb" key={ind}>
                <div className="feature-box-01 media"><i className={"icon theme-bg " + val.icons}></i>
                  <div className="feature-content media-body">
                    <h5>{val.title}</h5>
                    <p>{val.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="separated"></div>
          <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials />

        </div>
      </section>
    </>
  );
};

export default Services;