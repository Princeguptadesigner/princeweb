import React from "react";
import aboutImg from "../images/about-me.png";
import exp1 from "../images/a1.png";
import exp2 from "../images/a2.png";
import exp3 from "../images/a3.png";


const Aboutus = () => {
  const aducation = [
    {
      date: '2010-2012',
      title: 'Graphic Designer',
      subtitle: 'International Design Institute'
    },
    {
      date: '2010-2012',
      title: 'Web Development',
      subtitle: 'International Design Institute'
    },
    {
      date: '2010-2012',
      title: 'Search Engine Optimization',
      subtitle: 'International Design Institute'
    }
  ];
  const skill = [
    {
      title: 'HTML5',
      percent: '92%',
    },
    {
      title: 'WordPress',
      percent: '72%',
    },
    {
      title: 'Magento',
      percent: '86%',
    },
    {
      title: 'UI/UX',
      percent: '88%',
    }
  ];

  const resumeRow = [
    {
      Imgsrc: exp1,
      title: 'Front-end Developer',
      location: 'WeLab | Remote | Jan 2019 - Present',
      type: 'Full Time',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.`,
    },
    {
      Imgsrc: exp2,
      title: 'Front-end Developer',
      location: 'WeLab | Remote | Jan 2019 - Present',
      type: 'Full Time',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.`,
    },
    {
      Imgsrc: exp3,
      title: 'Front-end Developer',
      location: 'WeLab | Remote | Jan 2019 - Present',
      type: 'Full Time',
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.`,
    },
  ];
  return (
    <>
      <section id="about" data-nav-tooltip="About" className="pp-section pp-scrollable section counter">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 m-15px-tb">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src={aboutImg} title="" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 m-15px-tb">
              <div className="about-info">
                <div className="title">
                  <h3>About me.</h3>
                </div>
                <div className="about-text">
                  <h3>I'm a Freelancer Front-end Developer with over 3 years of experience.</h3>
                  <p>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>

                  <div className="row">
                    <div className="col-auto">
                      <div className="media align-items-center">
                        <span className="count">5k</span>
                        <div className="media-body">Projects <br />Completed.</div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="media align-items-center">
                        <span className="count">3k</span>
                        <div className="media-body">Satisfied <br />Clients.</div>
                      </div>
                    </div>
                  </div>

                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#click">
                      <span>Contact Me</span>
                    </a>
                    <a className="px-btn px-btn-theme" href="#click">
                      <span>Portfolio</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="separated"></div>
          <div className="title">
            <h3>Education &amp; Skills</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {aducation.map((val, ind) => (
                  <li key={ind}>
                    <span>{val.date}</span>
                    <h6>{val.title}</h6>
                    <p>{val.subtitle}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-7 ml-auto m-15px-tb">
              <div className="skills-box">
                <h3>My skills</h3>
                <p>I'm a Freelancer Front-end Developer with over 3 years of experience. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                {skill.map((val, ind) => (
                  <div className="skill-lt" key={ind}>
                    <h6>{val.title}</h6>
                    <div className="skill-bar">
                      <div className="skill-bar-in" style={{ width: val.percent }}>
                        <span data-toggle="tooltip" title={val.percent}></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="separated"></div>
          <div className="title">
            <h3>Experience.</h3>
          </div>
          <div className="resume-box">
            {resumeRow.map((val, ind) => (
              <div className="resume-row" key={ind}>
                <div className="row">
                  <div className="col-sm-3 col-md-3 col-xl-2">
                    <div className="rb-left">
                      <img src={val.Imgsrc} title="" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-md-9 col-xl-10">
                    <div className="rb-right">
                      <h6>{val.title}</h6>
                      <label>{val.location}</label>
                      <div className="rb-time">{val.type}</div>
                      <p>{val.desc}</p>
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

export default Aboutus;