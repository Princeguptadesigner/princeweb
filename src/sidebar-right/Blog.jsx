import React from "react";
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";
import blog4 from "../images/blog-4.jpg";


const Blog = () => {
  const blogdata = [
    {
      link: '#top',
      src: blog1,
      date: "29/FEB/2022 - WEBSITE - 1 COMMENT",
      desc: `Five Solid Evidences Attending Design Is Good For Your Career Development.`
    },
    {
      link: '#top',
      src: blog2,
      date: "29/FEB/2022 - WEBSITE - 1 COMMENT",
      desc: `Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure.`
    },
    {
      link: '#top',
      src: blog3,
      date: "29/FEB/2022 - WEBSITE - 1 COMMENT",
      desc: `I Will Tell You The Truth About Design In The Next 60 Seconds.`
    },
    {
      link: '#top',
      src: blog4,
      date: "29/FEB/2022 - WEBSITE - 1 COMMENT",
      desc: `What You Know About Design And What You Don't Know About Design.`
    },
  ];
  return (
    <>
      <section id="blog" data-nav-tooltip="Blog" className="pp-section pp-scrollable section">
        <div className="container">
          <div className="title">
            <h3>Latest Blog.</h3>
          </div>
          <div className="row">
            {blogdata.map((val, ind) => (
              <div className="col-md-6 m-15px-tb" key={ind}>
                <div className="blog-grid">
                  <div className="blog-img">
                    <a href={val.link}>
                      <img src={val.src} title="" alt="" />
                    </a>
                  </div>
                  <div className="blog-info">
                    <div className="meta">{val.date}</div>
                    <h6><a href={val.link}>{val.desc}</a>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12 read-more-blog text-center">
              <a className="px-btn px-btn-theme" href="#blog">More Blogs</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;