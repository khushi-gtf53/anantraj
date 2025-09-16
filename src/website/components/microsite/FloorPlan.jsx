"use client";

import React, { useState, useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Lightbox } from "yet-another-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "yet-another-react-lightbox/styles.css";
import CommonHeading from "../../components/common/CommonHeading";

const FloorPlan = ({ heading, floorPlans, masterPlan }) => {
  const tabs = Object.keys(floorPlans);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  const prev = useRef(null);
  const next = useRef(null);

  const slides = floorPlans[activeTab];

  return (
    <section className="floor_plan w-full bg-[#FBF6F6] relative">
      <div className="wrapper">
      <div className="heading mb-10">        
        <CommonHeading>{heading}</CommonHeading>
      </div>

      <div className="top_nav sm:flex pb-5 border-b justify-between items-center">
        <div className="tabs uppercase pb-5 sm:pb-0 flex gap-6 font-sangbleu tracking-wider text-xl">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab cursor-pointer ${activeTab === tab ? "text-primaryblue" : ""
                }`}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="right_nav flex gap-3 sm:gap-8 font-sangbleu tracking-wider sm:text-xl capitalize items-center">
          <h3 className="cursor-pointer" onClick={() => setLightboxOpen(true)}>
            View Master Plan
          </h3>
          <div className="h-auto w-[1px] bg-black"></div>
          {slides[0]?.brochure && (
            <a href={slides[0].brochure} download>
              <h3 className="cursor-pointer">Download Brochure</h3>
            </a>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 mt-10 sm:gap-10 pb-[20px] lg:pb-[20px]">
        <div className="col-span-12 sm:col-span-8">
          <Swiper
            modules={[Navigation, Thumbs]}
            loop={true}
            speed={600}
            className="w-full h-auto"
            navigation={{
              nextEl: ".floorplan-button-next",
              prevEl: ".floorplan-button-prev",
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                onClick={() => {
                  setLightboxSlides(slides.map((s) => ({ src: s.src })));
                  setOpenIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <div className="sm:flex gap-10 items-center">
                  <div className="floorplan sm:w-1/2">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="sm:w-[450px] sm:h-[350px] object-contain cursor-pointer"
                    />
                  </div>
                  <div className="plan_detail uppercase mt-5 sm:mt-0 font-sangbleu sm:text-xl leading-[40px] max-w-[300px]">
                    {slide.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="col-span-12 sm:col-span-4 flex flex-col items-center">
          <div className="opacity-70 flex gap-4 items-center mb-6">
            <div ref={prev} className="floorplan-button-prev cursor-pointer">
              <IoIosArrowRoundBack size={40} />
            </div>
            <div ref={next} className="floorplan-button-next cursor-pointer">
              <IoIosArrowRoundForward size={40} />
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            loop={true}
            speed={600}
            initialSlide={1}
            slidesPerView={1}
            navigation={{
              nextEl: ".floorplan-button-next",
              prevEl: ".floorplan-button-prev",
            }}
            className="w-[80%] h-[200px] sm:w-[60%] sm:h-[300px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                onClick={() => {
                  setLightboxSlides(slides.map((s) => ({ src: s.src })));
                  setOpenIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={slide.src}
                  alt={`Thumb ${index}`}
                  className="w-full h-auto object-contain cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides.length ? lightboxSlides : [{ src: masterPlan.src }]}
        index={openIndex}
      />
</div>
      <img src="./assets/pattern-bg.png" alt="pattern-bg" className="h-[70px] bg-[#FBF6F6] relative left-0 bottom-0 w-full object-cover" />
    </section>
  );
};

export default FloorPlan;
