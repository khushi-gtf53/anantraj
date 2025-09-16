"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const OurTeam = () => {
  const [activeRole, setActiveRole] = useState("Our Founder");
  const [swiperInstance, setSwiperInstance] = useState(null);

  const slides = [
    {
      id: 1,
      title: "Shri Ashok Sarin - our founder",
      image: "./assets/anant-raj.png",
      text: "Shri Ashok Sarin was the visionary founder and Chairman of Anant Raj Limited, with over five decades of unparalleled expertise in real estate.",
      role: "Our Founder",
    },
    {
      id: 2,
      title: "Amit Sarin",
      image: "./assets/managing-director.jpg",
      text: "The Managing Director oversees strategic operations and growth initiatives at Anant Raj Limited...",
      role: "Managing Director",
    },
    {
      id: 3,
      title: "Aman Sarin",
      image: "./assets/ceo.jpg",
      text: "The Director & CEO leads the company's vision and executive decisions at Anant Raj Limited...",
      role: "Director & CEO",
    },
    {
      id: 4,
      image: "./assets/coo.jpg",
      title: "Ashim Sarin",
      text: "The Director & COO manages operational excellence and coordination at Anant Raj Limited...",
      role: "Director & COO",
    },
  ];

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveRole(slides[currentIndex].role);
  };

  const handleRoleClick = (role) => {
    const slideIndex = slides.findIndex((slide) => slide.role === role);
    if (slideIndex !== -1 && swiperInstance) {
      swiperInstance.slideToLoop(slideIndex);
      setActiveRole(role);
    }
  };

  // Ensure navigation buttons are updated after Swiper initialization
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.navigation?.update();
    }
  }, [swiperInstance]);

  return (
    <section
      data-gsap="fade-up"
      data-gsap-duration="1"
      data-gsap-delay="0.5"
      className="px-[20px] lg:px-[100px] py-[40px] lg:py-[100px] bg-white"
    >
      <h2 className="text-primaryred font-sangbleu mb-[40px] uppercase lg:text-left text-center tracking-[2px] leading-[30px] lg:leading-[40px] text-[13px] lg:text-[18px]">
        Meet our founder, whose visionary leadership drives creativity, growth,
        and excellence
      </h2>

      <div className="container mx-auto lg:px-4">
        <div className="swiper-container-team overflow-x-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-prev-team",
              nextEl: ".swiper-next-team",
            }}
            loop={true}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiperInstance}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex justify-between flex-wrap items-center">
                  <div className="basis-full lg:basis-[40%] lg:ml-[4px]">
                    <img
                      className="h-[300px] lg:h-[380px] w-full object-contain"
                      src={slide.image}
                      alt="anant-raj"
                    />
                  </div>
                  <div className="basis-full lg:basis-[50%]">
                    <div className="flex justify-between items-center lg:pb-[30px] py-[25px]">
                      <h3 className="text-primaryblue uppercase lg:text-[16px] text-[14px] tracking-[1px] font-[600]">
                        {slide.title}
                      </h3>
                      <div>
                        {/* Desktop Navigation Buttons */}
                        <div className="flex">
                          <button className="swiper-prev-team cursor-pointer rotate-[180deg] mr-[10px]">
                            <img
                              src="./assets/right-arrow.png"
                              alt="right"
                              className="h-[17px] lg:h-[20px] object-cover"
                            />
                          </button>
                          <button className="swiper-next-team cursor-pointer">
                            <img
                              src="./assets/right-arrow.png"
                              alt="left"
                              className="h-[17px] lg:h-[20px] object-cover"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="border-y-[1px] lg:text-start text-center leading-[25px] mb-[25px] border-solid border-black py-[25px] lg:py-[40px] text-[14px] font-lato tracking-[1px]">
                      {slide.text}
                    </p>
                    <ul className="flex lg:text-start text-center flex-wrap justify-between items-center lg:mb-[35px]  my-[25px] tracking-[1px]">
                      <li
                        className={`cursor-pointer lg:text-left lg:text-[13px] lg:mb-0 mb-[10px] lg:basis-auto basis-[50%] ${
                          activeRole === "Our Founder"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }`}
                        onClick={() => handleRoleClick("Our Founder")}
                      >
                        <span>Our Founder</span>
                      </li>
                      <li
                        className={`cursor-pointer lg:text-left lg:text-[13px] lg:mb-0 mb-[10px] lg:basis-auto basis-[50%] ${
                          activeRole === "Managing Director"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }`}
                        onClick={() => handleRoleClick("Managing Director")}
                      >
                        <span>Managing Director</span>
                      </li>
                      <li
                        className={`cursor-pointer lg:text-end lg:text-[13px] lg:basis-auto basis-[50%] ${
                          activeRole === "Director & CEO"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }`}
                        onClick={() => handleRoleClick("Director & CEO")}
                      >
                        <span>Director & CEO</span>
                      </li>
                      <li
                        className={`cursor-pointer lg:text-end lg:text-[13px] lg:basis-auto basis-[50%] ${
                          activeRole === "Director & COO"
                            ? "text-primaryblue font-[600]"
                            : ""
                        }`}
                        onClick={() => handleRoleClick("Director & COO")}
                      >
                        <span>Director & COO</span>
                      </li>
                    </ul>
                    <button className="font-[600] text-[14px] lg:mx-0 mx-auto lg:w-auto w-[60%] text-primaryblue text-center mt-[40px] flex justify-center lg:mt-[35px] font-lato border-y-[1px] py-[9px] px-[19px] lg:px-[25px] tracking-[1px] border-primaryblue border-y-solid">
                      EXPLORE OUR TEAM
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
