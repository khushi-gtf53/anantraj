"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";

const slides = [
  {
    id: 0,
    mbImage: "/assets/luxury/1.jpg",
    src: "/assets/luxury/1.jpg",
    name: "Anant Raj Estate",
    location: "Sector 63A, Gurugram",
    category: "TOWNSHIP",
  },
  {
    id: 1,
    mbImage: "./assets/luxury/residential/1.webp",
    src: "./assets/luxury/residential/1.webp",
    name: "The Estate Floors",
    location: "Sector 63A, Gurugram",
    category: "RESIDENTIAL",
  },
  {
    id: 2,
    mbImage: "./assets/luxury/residential/2.jpg",
    src: "./assets/luxury/residential/2.jpg",
    name: "Estate Apartments",
    location: "Sector 63A, Gurugram",
    category: "RESIDENTIAL",
  },
  {
    id: 3,
    mbImage: "./assets/luxury/residential/3.jpg",
    src: "./assets/luxury/residential/3.jpg",
    category: "RESIDENTIAL",
    name: "Ashok Estate",
    location: "Sector 63A, Gurugram",
  },
  {
    id: 4,
    mbImage: "./assets/luxury/residential/4.jpg",
    src: "./assets/luxury/residential/4.jpg",
    name: "Estate Villa",
    location: "Sector 63A, Gurugram",
    category: "RESIDENTIAL",
  },
  {
    id: 5,
    mbImage: "./assets/luxury/residential/5.jpg",
    src: "./assets/luxury/residential/5.jpg",
    name: "Birla Navya Amoda 2",
    location: "Sector 63A, Gurugram",
    category: "RESIDENTIAL",
  },
  // {
  //   id: 6,
  //   mbImage: "./assets/luxury/residential/6.jpg",
  //   src: "./assets/luxury/residential/6.jpg",
  //   category: "RESIDENTIAL",
  //   name: "Estate Villa",
  //   location: "Sector 63A, Gurugram",
  // },
  // {
  //   id: 7,
  //   mbImage: "./assets/luxury/residential/7.jpg",
  //   src: "./assets/luxury/residential/7.jpg",
  //   category: "RESIDENTIAL",
  //   name: "Estate Floors",
  //   location: "Sector 63A, Gurugram",
  // },
  {
    id: 8,
    mbImage: "./assets/luxury/commercial/1.jpg",
    src: "./assets/luxury/commercial/1.jpg",
    category: "COMMERCIAL",
    name: "Joy Square (JV with AIPL)",
    location: "Sector 63A, Gurugram",
  },
  {
    id: 9,
    mbImage: "./assets/luxury/commercial/2.jpg",
    src: "./assets/luxury/commercial/2.jpg",
    category: "COMMERCIAL",
    name: "Tech Park",
    location: "Panchkula",
  },
  {
    id: 10,
    mbImage: "./assets/luxury/commercial/3.jpg",
    src: "./assets/luxury/commercial/3.jpg",
    category: "COMMERCIAL",
    name: "Karol Bagh Mall",
    location: "Karol Bagh, Delhi",
  },
  {
    id: 11,
    mbImage: "./assets/luxury/commercial/4.jpg",
    src: "./assets/luxury/commercial/4.jpg",
    category: "COMMERCIAL",
    name: "Anant Raj Trade Centre",
    location: "GT Road, Sonipat",
  },
  {
    id: 12,
    mbImage: "./assets/luxury/commercial/5.jpg",
    src: "./assets/luxury/commercial/5.jpg",
    category: "COMMERCIAL",
    name: "Anant Raj Tower",
    location: "Sector 44, Gurugram",
  },
  {
    id: 13,
    mbImage: "./assets/luxury/hospitality/1.jpg",
    src: "./assets/luxury/hospitality/1.jpg",
    category: "HOSPITALITY",
    name: "Stellar Resorts",
    location: "New Delhi near Qutab Minar",
  },
  {
    id: 14,
    mbImage: "./assets/luxury/hospitality/2.jpg",
    src: "./assets/luxury/hospitality/2.jpg",
    category: "HOSPITALITY",
    name: "Bel La Monde",
    location: "Chattarpur, Delhi",
  },
  {
    id: 15,
    mbImage: "./assets/luxury/cloud.jpg",
    src: "./assets/luxury/cloud.jpg",
    category: "DATA CENTERS",
    name: "Anant Raj Cloud",
    location: "Sector 44, Gurugram",
  },
];

const LuxuryProperties = () => {
  const [isMobile, setIsMobile] = useState(false); // ✅ safe default
  const [activeCategory, setActiveCategory] = useState("TOWNSHIP");
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imageRefs = useRef([]);
  const sectionRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  // Preload images
  useEffect(() => {
    let loaded = 0;
    slides.forEach((slide) => {
      const img = new Image();
      img.src = isMobile ? slide.mbImage : slide.src;
      img.onload = () => {
        loaded++;
        if (loaded === slides.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, [isMobile]);

  const animateImage = (index) => {
    const imgEl = imageRefs.current[index];
    if (imgEl) {
      gsap.fromTo(
        imgEl,
        { scale: 1.3, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
        }
      );
    }
  };

  useEffect(() => {
    let hasAnimated = false;

    if (!imagesLoaded || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateImage(0);
          hasAnimated = true;
          observer.disconnect(); // run once
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [imagesLoaded]);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 767);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setActiveCategory(slides[realIndex].category);
    animateImage(realIndex);
  };

  const handleCategoryClick = (category) => {
    const slideIndex = slides.findIndex((slide) => slide.category === category);
    if (slideIndex !== -1 && swiperInstance) {
      swiperInstance.slideToLoop(slideIndex);
      setActiveCategory(category);
      animateImage(slideIndex);
    }
  };

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.navigation?.update();
    }
  }, [swiperInstance]);

  if (!imagesLoaded) {
    return (
      <div className="h-[500px] flex items-center justify-center bg-[#FBF6F6]">
        <p className="text-primaryblue font-bold text-lg">Loading images...</p>
      </div>
    );
  }

  return (
    <section ref={sectionRef} className="bg-[#FBF6F6] relative pb-[70px]">
      <div className="px-[20px] lg:px-[100px] py-[40px] lg:py-[100px]">
        {/* Header */}
        <div className="grid grid-cols-12 sm:mb-[35px] w-full">
          <div className="col-span-12 sm:col-span-4 ">
          <h2 className="text-primaryred w-full text-center lg:text-left basis-[100%] lg:mb-0 mb-[25px] font-sangbleu uppercase tracking-[2px] leading-[30px] lg:leading-[40px] text-[13px] lg:text-[20px]">
            OUR PROPERTIES
          </h2>
          </div>
          <div className="col-span-12 sm:col-span-8 ">
          <div className={`flex text-gray-800 gap-2 basis-[100%] ${isMobile ? "overflow-y-hidden overflow-x-auto scroll-smooth scrollable-content" : ""}   flex-nowrap font-lato tracking-[1px] text-[14px]`}>
            {["TOWNSHIP", "RESIDENTIAL", "COMMERCIAL", "HOSPITALITY", "DATA CENTERS"].map(
              (category) => (
                <p
                  key={category}
                  className={`hover:text-gray-600 relative basis-[50%] lg:text-center text-center mb-[17px] lg:mr-[0rem] cursor-pointer ${
                    activeCategory === category
                      ? "text-primaryblue font-bold"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                  {activeCategory === category && (
                    <span className="h-[80px] hidden lg:block absolute bottom-[-98px] left-[62%] bg-primaryblue w-[1px]"></span>
                  )}
                </p>
              )
            )}
          </div>
          </div>
        </div>

        {/* Swiper */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-prev-custom",
              nextEl: ".swiper-next-custom",
            }}
            loop={true}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiperInstance}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative">
                  <p className="tracking-[1.2px] hidden lg:flex flex-col absolute z-[99] left-[30px] lg:left-[80px] text-white top-[30px] lg:bottom-[40px]">
                    <span className="text-[22px] lg:text-[32px] text-center font-[600]">
                      {slide.name}
                    </span>
                    <span className="text-[13px] lg:text-[15px] tracking-[1.5px]">
                      {slide.location}
                    </span>
                  </p>
                  <img
                    ref={(el) => (imageRefs.current[idx] = el)}
                    src={!isMobile ? slide.src : slide.mbImage}
                    alt={`${slide.category} Project`}
                    className="w-full h-[350px] object-cover xl:h-[500px] lg:h-[400px]"
                  />
                  <div className="flex flex-col lg:items-start items-center lg:hidden justify-between mt-4 gap-4">
                    <p className="tracking-[1.2px]  lg:hidden flex flex-col  z-[99]  text-primary top-[30px] ">
                      <span className="text-[22px] lg:text-[32px] text-center font-[600]">
                        {slide.name}
                      </span>
                      <span className="text-[13px] lg:text-[15px] tracking-[1.5px]">
                        {slide.location}
                      </span>
                    </p>
                    <div className="z-[99] mb-[20px]">
                      <button
                        aria-label="Previous"
                        className="p-2 hover:bg-gray-200 swiper-prev-custom rounded-full transition"
                      >
                        <img
                          src="./assets/right-arrow.png"
                          alt="Previous"
                          className="h-5 w-5 rotate-180"
                        />
                      </button>
                      <button
                        aria-label="Next"
                        className="p-2 hover:bg-gray-200 swiper-next-custom rounded-full transition"
                      >
                        <img
                          src="./assets/right-arrow.png"
                          alt="Next"
                          className="h-5 w-5"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-start lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse w-full  lg:mt-[2.5rem] ">
          <button className="font-[600] mx-auto w-[70%] lg:w-[350px] text-[14px] text-primaryblue text-center lg:mt-0  font-lato border-y-[1px] py-[9px] px-[25px] tracking-[1px] border-primaryblue border-y-solid">
            EXPLORE ALL PROJECTS
          </button>

          {/* Desktop Arrows */}
          <div className="lg:flex hidden justify-start lg:justify-end w-full mb-0 lg:mt-2">
            <button className="w-8 h-8  cursor-pointer text-white rounded-full flex items-center justify-center swiper-prev-custom">
              <img
                src="./assets/right-arrow.png"
                alt="Previous"
                className="h-5 w-5 rotate-180"
              />
            </button>
            <button className="w-8 h-8 ml-0  cursor-pointer text-white rounded-full flex items-center justify-center swiper-next-custom">
              <img
                src="./assets/right-arrow.png"
                alt="Next"
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </div>

      <img
        src="./assets/pattern-bg.png"
        alt="pattern-bg"
        className="h-[70px] bg-[#FBF6F6] absolute bottom-0 w-full object-cover"
      />
    </section>
  );
};

export default LuxuryProperties;
