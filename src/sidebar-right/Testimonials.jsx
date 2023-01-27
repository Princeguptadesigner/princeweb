import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import SliderImg1 from "../images/team-1.jpg";
import SliderImg2 from "../images/team-2.jpg";
import SliderImg3 from "../images/team-3.jpg";

const Testimonials = () => {
  const data = [
    {
      name: "Jennifer Lutheran",
      profile: `CEO at pxdraft`,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
      src: SliderImg1
    },
    {
      name: "Jennifer Lutheran",
      profile: `CEO at pxdraft`,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
      src: SliderImg2
    },
    {
      name: "Jennifer Lutheran",
      profile: `CEO at pxdraft`,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
      src: SliderImg3
    },
  ];
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="testimonial-wrapper"
      >
        {data.map((val, ind) => (
          <SwiperSlide className="testimonial-01 media" key={ind}>
            <div className="avatar">
              <img src={val.src} title="" alt="" />
            </div>
            <div className="media-body">
              <p>{val.desc}</p>
              <h6>{val.name}</h6><span>{val.profile}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;