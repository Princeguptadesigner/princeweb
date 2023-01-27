import React from "react";
import portfolio1 from "../images/m-portfolio-1.jpg";
import portfolio2 from "../images/m-portfolio-2.jpg";
import portfolio3 from "../images/m-portfolio-3.jpg";
import portfolio4 from "../images/m-portfolio-4.jpg";
import portfolio5 from "../images/m-portfolio-5.jpg";
import portfolio6 from "../images/m-portfolio-6.jpg";
import portfolio7 from "../images/m-portfolio-7.jpg";
import portfolio8 from "../images/m-portfolio-8.jpg";
import portfolio9 from "../images/m-portfolio-9.jpg";

const Portfolio = () => {
  const data = [
    {
      tag: "branding",
      title: `Momb ios App`,
      desc: `Broadcasting ios App`,
      src: portfolio1
    },
    {
      tag: "photoshop",
      title: `Momb ios App`,
      desc: `Broadcasting ios App`,
      src: portfolio2
    },
    {
      tag: "fashion",
      title: `Momb ios App`,
      desc: `Broadcasting ios App`,
      src: portfolio3
    },
    {
      tag: "product",
      title: `Momb ios App`,
      desc: `Broadcasting ios App`,
      src: portfolio4
    },
    {
      tag: "branding",
      title: `Momb ios App`,
      desc: `Broadcasting ios App`,
      src: portfolio5
    },
    {
      tag: "photoshop",
      title: `Momb ios App`,
      desc: `Broadcasting ios App`,
      src: portfolio6
    },
    {
      tag: "fashion",
      title: `Momb ios App`,
      desc: `Broadcasting ios App`,
      src: portfolio7
    },
    {
      tag: "product",
      title: `Momb ios App`,
      desc: `Broadcasting ios App`,
      src: portfolio8
    },
    {
      tag: "branding",
      title: `Momb ios App`,
      desc: `Broadcasting ios App`,
      src: portfolio9
    },
  ];
  return (
    <>
      <section id="work" data-nav-tooltip="Work" className="pp-section pp-scrollable section dark-bg">
        <div className="container">
          <div className="title">
            <h3>My Portfolio.</h3>
          </div>
          <div className="portfolio-filter-01">
            <ul className="filter nav js-portfolio-filter">
              <li className="c-pointer active" data-filter="*" >All</li>
              <li className="c-pointer " data-filter="branding" >Branding</li>
              <li className="c-pointer " data-filter="photoshop" >Photoshop</li>
              <li className="c-pointer " data-filter="fashion" >Fashion</li>
              <li className="c-pointer " data-filter="product">Product</li>
            </ul>
          </div>

          <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
            {data.map((val, ind) => (
              <div className={"grid-item " + val.tag} key={ind}>
                <div className="portfolio-box-01">
                  <div className="portfolio-info">
                    <h5 className="white-color font-weight-bold">{val.title}</h5>
                    <span>{val.desc}</span>
                  </div>
                  <div className="portfolio-img">
                    <img src={val.src} title="" alt="" />
                    <div className="portfolio-icon">
                      <a href={val.src} className="gallery-link">
                        <span className="ti-plus"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;