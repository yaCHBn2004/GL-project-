// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../img/profil.svg";
import img1 from "../img/etoile.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../index.css";

// import required modules

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//

// import required modules
import { Navigation } from "swiper/modules";
import Card from "./Card";
function About() {
  return (
    <div className="h-[60vh] bg-[#0C66A2] my-[8vh] p-[2%]">
        
      <Swiper
        slidesPerView={2}
        spaceBetween={-10}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] ">
            <Card
              name="personne num1"
              spec="droit de fjjf"
              img={img}
              img1={img1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] ">
            <Card
              name="imed bousekhrya"
              spec="droit de fjjf"
              img={img}
              img1={img1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] ">
            <Card
              name="imed bousekhrya"
              spec="droit de fjjf"
              img={img}
              img1={img1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] ">
            <Card
              name="imed bousekhrya"
              spec="droit de fjjf"
              img={img}
              img1={img1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] ">
            <Card
              name="imed bousekhrya"
              spec="droit de fjjf"
              img={img}
              img1={img1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] ">
            <Card
              name="imed bousekhrya"
              spec="droit de fjjf"
              img={img}
              img1={img1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] ">
            <Card
              name="imed bousekhrya"
              spec="droit de fjjf"
              img={img}
              img1={img1}
            />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default About;
