"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import SetupGsapAnimations from "../../utils/animation";
import gsap from "gsap";
import CommonHeading from "../../components/common/CommonHeading"

const Amenities = ({ data = [], heading = "", baseIconPath = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const iconRefs = useRef([]);
  const activeAmenity = data[activeIndex];

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent SSR run

    gsap.fromTo(
      ".amenityImg img",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.3 }
    );

    gsap.fromTo(
      ".amenity_about",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.3 }
    );
  }, [activeIndex]);


  if (!data?.length) return null;

  return (
    <section className="amenities relative w-full bg-[#FBF6F6]">
      <div className="wrapper">
        <div className="heading">
          <CommonHeading>{heading}</CommonHeading>
        </div>

        <div className="grid grid-cols-12 py-5 sm:py-10">
          <div className="col-span-7 sm:col-span-6 border-r pr-10">
            <div className="flex items-center w-full h-full gap-2 sm:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide max-w-full">
              {data.map((item, index) => {
                const isActive = index === activeIndex;
                const iconPath = `${baseIconPath}/icon/${item.icon}`;

                return (
                  <div
                    key={index}
                    ref={(el) => (iconRefs.current[index] = el)}
                    onClick={() => setActiveIndex(index)}
                    className={`group amenity flex-shrink-0 w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] border rounded-full p-4 sm:p-5 transition-all duration-300 cursor-pointer ${isActive ? "bg-[#b3162f] border-transparent" : "bg-transparent hover:bg-[#b3162f]"}`}
                  >
                    <img
                      src={iconPath}
                      alt={`amenity-icon-${index}`}
                      className={` ${isActive ? "invert" : ""} group-hover:invert w-full h-full object-contain`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrows + Counter */}
          <div className="col-span-5 sm:col-span-6">
            <div className="sm:flex gap-3 sm:gap-10 items-center ps-5 sm:ps-20">
              <div className="opacity-70 flex gap-2 sm:justify-end items-center h-full">
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setActiveIndex((prev) => (prev - 1 + data.length) % data.length)
                  }
                >
                  <IoIosArrowRoundBack size={40} />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % data.length)
                  }
                >
                  <IoIosArrowRoundForward size={40} />
                </div>
              </div>
              <div className="amenities-counter font-sangbleu">
                <div className="counter text-2xl sm:text-4xl mb-3 flex gap-3 items-end">
                  {String(activeIndex + 1).padStart(2, "0")}
                  <span>-</span>
                  <span className="sm:text-2xl">{data.length}</span>
                </div>
                <div className="title uppercase tracking-wide sm:text-xl">
                  exclusive amenities
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image + Description */}
        <div
          data-gsap="fade-up"
          data-gsap-duration="0.6"
          data-gsap-delay="0.3"
          className="grid grid-cols-12 py-3 sm:py-10"
        >
          <div className="col-span-12 sm:col-span-5">
            <div className="amenityImg overflow-hidden">
              <SetupGsapAnimations>
                <img src={activeAmenity.image} alt="amenity" />
              </SetupGsapAnimations>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-7">
            <div className="amenity_about pt-5 sm:pt-0 lg:px-20 flex flex-col w-full h-full justify-center">
              <div className="title font-sangbleu capitalize mb-5 text-[20px] leading-[35px]">
                {activeAmenity.title}
              </div>
              <div className="description leading-[30px]">
                {activeAmenity.description}
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Background Pattern */}
      <img
        src="/assets/pattern-bg.png"
        alt="pattern-bg"
        className="h-[70px] bg-[#FBF6F6] relative left-0 bottom-0 w-full object-cover"
      />
    </section>
  );
};

export default Amenities;
