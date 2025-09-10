"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Lightbox } from "yet-another-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = floorPlans[activeTab] || [];

  const openLightbox = (slidesArray, index = 0) => {
    setLightboxSlides(slidesArray);
    setOpenIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="floor_plan w-full bg-[#FBF6F6] relative">
      <div className="wrapper">
        {/* Heading */}
        <div className="heading mb-10">
          <CommonHeading>{heading}</CommonHeading>
        </div>

        {/* Tabs + Top Navigation */}
        <div className="top_nav sm:flex pb-5 border-b justify-between items-center">
          {/* Tabs */}
          <div className="tabs uppercase pb-5 sm:pb-0 flex gap-6 font-sangbleu tracking-wider text-base sm:text-xl flex-wrap">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab cursor-pointer transition-colors ${
                  activeTab === tab ? "text-primaryblue font-semibold" : "text-black"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Right Navigation */}
          <div className="right_nav flex gap-4 sm:gap-8 font-sangbleu tracking-wider text-sm sm:text-xl capitalize items-center">
            <h3
              className="cursor-pointer hover:text-primaryblue"
              onClick={() => openLightbox([{ src: masterPlan.src }], 0)}
            >
              View Master Plan
            </h3>
            <div className="h-auto w-[1px] bg-black/50"></div>
            {slides[0]?.brochure && (
              <a
                href={slides[0].brochure}
                download
                className="hover:text-primaryblue"
              >
                <h3>Download Brochure</h3>
              </a>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 mt-10 sm:gap-10 pb-10">
          {/* Main Swiper */}
          <div className="col-span-12 sm:col-span-8">
            <Swiper
              modules={[Navigation]}
              loop={true}
              speed={600}
              navigation={{
                nextEl: ".floorplan-button-next",
                prevEl: ".floorplan-button-prev",
              }}
              className="w-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="sm:flex gap-6 lg:gap-10 items-center cursor-pointer"
                    onClick={() =>
                      openLightbox(slides.map((s) => ({ src: s.src })), index)
                    }
                  >
                    <div className="floorplan sm:w-1/2">
                      <Image
                        src={slide.src}
                        alt={slide.title}
                        width={600}
                        height={400}
                        className="w-full max-h-[350px] object-contain"
                        priority={index === 0} // first image prioritized
                      />
                    </div>
                    <div className="plan_detail uppercase mt-5 sm:mt-0 font-sangbleu sm:text-lg lg:text-xl leading-relaxed max-w-[300px]">
                      {slide.title}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbnails + Arrows */}
          <div className="col-span-12 sm:col-span-4 flex flex-col items-center mt-8 sm:mt-0">
            {/* Arrows */}
            <div className="opacity-70 flex gap-6 items-center mb-6">
              <div ref={prevRef} className="floorplan-button-prev cursor-pointer">
                <IoIosArrowRoundBack size={40} />
              </div>
              <div ref={nextRef} className="floorplan-button-next cursor-pointer">
                <IoIosArrowRoundForward size={40} />
              </div>
            </div>

            {/* Thumbnail Swiper */}
            <Swiper
              modules={[Navigation]}
              loop={true}
              speed={600}
              slidesPerView={1}
              navigation={{
                nextEl: ".floorplan-button-next",
                prevEl: ".floorplan-button-prev",
              }}
              className="w-[80%] sm:w-[60%] h-[200px] sm:h-[300px]"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={slide.src}
                    alt={`Thumb ${index}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={() =>
                      openLightbox(slides.map((s) => ({ src: s.src })), index)
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides.length ? lightboxSlides : [{ src: masterPlan.src }]}
          index={openIndex}
        />
      </div>

      {/* Pattern BG */}
      <Image
        src="/assets/pattern-bg.png"
        alt="pattern-bg"
        width={1920}
        height={70}
        className="h-[70px] bg-[#FBF6F6] relative left-0 bottom-0 w-full object-cover"
      />
    </section>
  );
};

export default FloorPlan;
