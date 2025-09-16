"use client";

import { useState, useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css"
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import CommonHeading from "../../components/common/CommonHeading";

const LocationAdvantages = ({ tabsData, title, locationMap, onDownload }) => {
  const tabKeys = Object.keys(tabsData || {});
  const [activeTab, setActiveTab] = useState(tabKeys[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  const prev = useRef(null);
  const next = useRef(null);

  const slides = tabsData[activeTab] || [];

    const handleDownload = () => {
    if (!locationMap) return;
    const link = document.createElement("a");
    link.href = locationMap;
    link.download = "location-map.webp";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="w-full wrapper bg-white relative">
        <div className="sm:flex space-y-5 sm:space-y-0 justify-between items-center mb-10">         
          <CommonHeading>{title}</CommonHeading>
           {locationMap && (
            <div
              onClick={handleDownload}
              className="capitalize font-sangbleu tracking-wide text-lg cursor-pointer"
            >
              download location map
            </div>
          )}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 sm:col-span-7">
            <div className="sm:flex sm:gap-10 justify-between">
              <Swiper
                modules={[Navigation]}
                loop={true}

                speed={600}
                className="w-full h-auto sm:w-[450px] sm:h-[350px]"
                navigation={{
                  nextEl: ".location-button-next",
                  prevEl: ".location-button-prev",
                }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}
                    onClick={() => {
                      setLightboxSlides(slides.map((s) => ({ src: s.image })));
                      setOpenIndex(index);
                      setLightboxOpen(true);
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.description}
                      className="sm:w-[450px] sm:h-[350px] object-contain cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            <div className="mb-5 sm:mb-0">
              <div className="flex flex-col justify-center h-full gap-6 ">
                <div className="opacity-70 flex gap-4 items-center">
                  <div ref={prev} className="location-button-prev cursor-pointer">
                    <IoIosArrowRoundBack size={40} />
                  </div>
                  <div ref={next} className="location-button-next cursor-pointer">
                    <IoIosArrowRoundForward size={40} />
                  </div>
                </div>

                <div className="plan_detail uppercase font-sangbleu tracking-wider sm:text-xl leading-[35px] max-w-[300px]">
                  {slides[currentIndex]?.description}
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="flex justify-end items-center w-full h-full">
              {locationMap && (
                <img
                  src={locationMap}
                  alt="location map"
                  className="sm:w-[450px] sm:h-[350px] object-contain"
                />
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full flex gap-6 items-center uppercase tracking-wider pt-20 pb-10 overflow-x-auto  scroll-smooth scrollable-content">
          {tabKeys.map((tab, index) => (
            <div key={tab} className="flex items-center gap-6">
              <div
                className={`tab cursor-pointer whitespace-nowrap ${activeTab === tab ? "text-primaryred font-semibold" : ""
                  }`}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentIndex(0);
                }}
              >
                {tab}
              </div>
              {index < tabKeys.length - 1 && (
                <div className="w-10 h-[1px] bg-black min-w-[40px]" />
              )}
            </div>
          ))}
        </div>
      </section>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides.length && lightboxSlides}
        index={openIndex}
      />
    </>
  );
};

export default LocationAdvantages;
