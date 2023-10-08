
import PropTypes from 'prop-types';



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'



import {
  EffectCoverflow,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import ServiceCard from '../../Components/ServiceCard';



const Services = ({ev}) => {

    console.log(ev)

    return (
      <div>
        <div className="text-center">
          <h1 className="text-5xl">Our Service Offerings'Diverse Spectrum</h1>
        </div>
        <Swiper
          className=""
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={5}
          mousewheel={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Mousewheel, EffectCoverflow, Autoplay]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
        >
          {ev.map((event) => (
            <SwiperSlide className=".swiper-slide00" key={event.id}>
              <ServiceCard event={event}></ServiceCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

Services.propTypes = {
    ev: PropTypes.array.isRequired
};

export default Services;