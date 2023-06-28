import React from 'react';
import { useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const PriceLevels = ({ priceLevels }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="md:container px-5 pt-14">
        <Swiper
          direction={"horizontal"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.9}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {priceLevels.plans.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
        p-8 h-full rounded-2xl flex items-center gap-6
         border-slate-200 md:flex-row flex-col
          ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <div>
                  <h6>{content.title}</h6>
                  <h4>{content.description}</h4>
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <ul style={{ listStyle: 'none' }}>
                    {content.features.map((feature, j) => (
                      <li key={j} style={{ marginBottom: '10px' }}>{feature}</li>
                    ))}
                  </ul>
                  <h4 style={{ fontSize: '20px' }}>{content.price}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PriceLevels;
