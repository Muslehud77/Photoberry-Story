
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./silder.css";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Slider({ ev }) {

  

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="mySwiper2 "
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {ev.map((e) => (
          <SwiperSlide key={e.id} className="swiper-slide1">
            <img className="" src={e.thumbnail_img} alt="" />
            <h4 className="absolute text-2xl font-bold font-xing text-stroke-3 text-white pt-52">
              {e.title_sm}
            </h4>
            <Link
              to={`/details/${e.id}`}
              className="h-full bottom-0 absolute  w-full"
            ></Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
