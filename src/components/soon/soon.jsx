import React from 'react';
import './soon.css'
// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import shows_thursday from './shows/thursday';
import shows_friday from './shows/friday';
import shows_saturday from './shows/saturday';
import shows_default from './shows/default';

function Soon() {

  let date = new Date();
  let day =  date.getDay();

  let shows = {}
  switch (day) {
    case 4: shows = shows_thursday;
    break;
    case 5: shows = shows_friday;
    break;
    case 6: shows = shows_saturday;
    break;
    default: shows = shows_default;
  }

  shows.sort((a,b)=>{
    return a.time - b.time;
  })

  return (
    <section className='soon'>

      <Swiper className='soon-slider'
        direction={"vertical"}
        autoplay
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {(shows) ?
          (
            shows.map((item) => {
              return <SwiperSlide key={`${item.time}-${item.name}`} className='slide'>
                <img src={item.img} alt={item.name} />
              </SwiperSlide>
            })
          )
          : <></>}
      </Swiper>
    </section>
  )
}

export default Soon