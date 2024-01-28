// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import stat from '../img/stat.svg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../index.css';

// import required modules

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Card1 from './Card1';
function About2() {

    return (
     <div className='h-[60vh] relative w-full   mm'>
              
              <Swiper
         slidesPerView={3}
         spaceBetween={5}
         loop={true}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Pagination, Navigation]}
         className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1 des1='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' des='ghkgh hhjhgh hjghjhjjh' img={stat}/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1  des1='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' des='ghkgh hhjhgh hjghjhjjh' img={stat}/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1  des1='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' des='ghkgh hhjhgh hjghjhjjh' img={stat}/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1  des1='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' des='ghkgh hhjhgh hjghjhjjh' img={stat}/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1 des='ghkgh hhjhgh hjghjhjjh' img={stat} des1={undefined}/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1  des1='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' des='ghkgh hhjhgh hjghjhjjh' img={stat}/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1  des1='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' des='ghkgh hhjhgh hjghjhjjh' img={stat}/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1 des='ghkgh hhjhgh hjghjhjjh' img={stat} des1={undefined}/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1  des1='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' des='ghkgh hhjhgh hjghjhjjh' img={stat}/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1  des1='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' des='ghkgh hhjhgh hjghjhjjh' img={stat}/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1 des='ghkgh hhjhgh hjghjhjjh' img={stat} des1={undefined}/></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide bg-[#DDE2E5] "><Card1  des1='lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' des='ghkgh hhjhgh hjghjhjjh' img={stat}/></div>
        </SwiperSlide>
        
      </Swiper>
           
      
     </div>
    );
  }
  
  export default About2;
  

          
      
  