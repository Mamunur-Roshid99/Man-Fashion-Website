import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import heroImg1 from '../../../assets/hero.png'
import heroImg2 from "../../../assets/hero2.png";
import heroImg3 from "../../../assets/hero3.png";

const slides = [
  {
    id: 1,
    title: "Top Selling Shoe",
    heading: "INCIDUNT DUCIMUS",
    subHeading: "CUM DUCIMUS",
    image: heroImg1, // use image URLs if local not working
  },
  {
    id: 2,
    title: "New Arrival",
    heading: "INCIDUNT DUCIMUS",
    subHeading: "CUM DUCIMUS",
    image: heroImg1,
  },
  {
    id: 3,
    title: "Limited Edition",
    heading: "INCIDUNT DUCIMUS",
    subHeading: "CUM DUCIMUS",
    image: heroImg1,
  },
];

const Hero = () => {
  return (
    <section className="mt-8">
      <div className="container w-[90%] lg:w-[1200px] mx-auto flex flex-col gap-4 lg:flex-row justify-between">
        {/* main img */}
        <div className="lg:w-[793px] lg:h-[471px] bg-gradient-to-br from-[#e104041a] to-white lg:flex items-center justify-center">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper"
          >
            <h1 className="absolute text-[100px] md:text-[85px] rotate-90 font-extrabold text-[#fbe5da] left-16 top-16 md:left-6 lg:top-28 lg:left-0 lg:text-[150px] font-sans">
              SHOE
            </h1>
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-2  lg:py-20 lg:pr-20 lg:pl-5">
                  <img
                    src={slide.image}
                    alt="shoe"
                    className="w-64 drop-shadow-xl lg:w-[276px] lg:h-[275px] "
                  />
                  <div className="text-center md:text-left">
                    <p className="text-[#3B3B3B] font-sans mb-3">
                      {slide.title}
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#363636]">
                      {slide.heading}
                    </h2>
                    <h3 className="text-2xl lg:text-3xl  font-bold text-[#363636] mb-4">
                      {slide.subHeading}
                    </h3>
                    <button className="bg-[#EB6420] text-white px-6 py-2 rounded hover:bg-[#eb6420da] transition mb-12 cursor-pointer">
                      🛒 Buy Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* content img */}
        <div className="flex flex-col gap-4">
          {/* img1 */}
          <div className="lg:w-[387px] lg:h-[225px] md:w-full flex items-center bg-gradient-to-r from-[#fff1f0] to-white">
            <div className="lg:w-[179px] lg:h-[225px] w-[225px] md:w-full flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl text-[#0D0D0D]">new jeans</h3>
                <p className="text-xl font-bold text-[#3B3B3B]">collection</p>
              </div>
              <p className="px-[15px] py-[3px] rounded-sm border text-sm text-[#0D0D0D] border-[#F3A279] cursor-pointer">
                view category
              </p>
            </div>
            <div className="lg:w-[225px] lg:h-[225px] w-[179px]">
              <img
                src={heroImg2}
                alt="hero"
                className="lg:w-[225px] lg:h-[225px]"
              />
            </div>
          </div>
          {/* img2 */}
          <div className="lg:w-[387px] lg:h-[225px] md:w-full flex items-center bg-gradient-to-r from-[#fff1f0] to-white">
            <div className="lg:w-[173px] lg:h-[224px] w-[225px] md:w-full flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl text-[#0D0D0D]">new glasses</h3>
                <p className="text-xl font-bold text-[#3B3B3B]">collection</p>
              </div>
              <p className="px-[15px] py-[3px] rounded-sm border text-sm text-[#0D0D0D] border-[#F3A279] cursor-pointer">
                view category
              </p>
            </div>
            <div className="lg:w-[225px] lg:h-[226px] w-[179px]">
              <img
                src={heroImg3}
                alt="hero"
                className="lg:w-[225px] lg:h-[225px] h-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
