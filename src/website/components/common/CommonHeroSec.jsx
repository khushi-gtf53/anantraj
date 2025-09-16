"use client";

import { useState } from "react";

const CommonHeroSec = ({ ObjData }) => {
  const [activeTab, setActiveTab] = useState("group");
  const [visibleTabs, setVisibleTabs] = useState([0, 1, 2]);
  const { title, heading, subtitle, imgUrl, linkTo, tabs } = ObjData;

  const handleSlider = (direction) => {
    const totalTabs = tabs.length;
    setVisibleTabs((prevState) => {
      return direction === "next"
        ? [
          (prevState[0] + 1) % totalTabs,
          (prevState[1] + 1) % totalTabs,
          (prevState[2] + 1) % totalTabs,
        ]
        : [
          (prevState[0] - 1 + totalTabs) % totalTabs,
          (prevState[1] - 1 + totalTabs) % totalTabs,
          (prevState[2] - 1 + totalTabs) % totalTabs,
        ];
    });
  };

  const isPrevDisabled = visibleTabs[0] === 0;
  const isNextDisabled = visibleTabs[2] === tabs?.length - 1;

  return (
    <section id="group">
      <div className="bg-[#FBF6F6] mt-[40px] px-[20px] lg:p-[100px] pt-[100px] pb-[40px]">
        {/* Title for mobile */}
        <div className="sm:hidden mb-4 items-center">
          <h3 className="text-black uppercase tracking-wider basis-[10%]">
            {title}
          </h3>
          <div className="h-[0.1px] hidden sm:block bg-black basis-[90%]"></div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex space-x-8 justify-end">
          {tabs?.map((tab, i) => (
            <a
              key={i}
              href={`#${tab.tablink}`}
              onClick={() => setActiveTab(tab.tablink)}
              className={`${activeTab === tab.tablink
                  ? "text-primaryblue font-semibold opacity-100"
                  : "opacity-[0.4]"
                } capitalize cursor-pointer`}
            >
              {tab.tabname}
            </a>
          ))}
        </nav>

        {/* Mobile nav */}
        <nav className="flex sm:hidden border-y py-2 border-black space-x-10">
          {tabs?.slice(visibleTabs[0], visibleTabs[2] + 1).map((tab, i) => (
            <a
              key={i}
              href={`#${tab.tablink}`}
              onClick={() => setActiveTab(tab.tablink)}
              className="whitespace-nowrap flex-1"
            >
              <button
                className={`${i === tabs.length - 1 ? "text-right" : ""}
                  ${activeTab === tab.tablink
                    ? "text-primaryblue font-semibold opacity-100"
                    : "opacity-[0.4]"
                  } capitalize cursor-pointer lg:text-[16px] text-[14px]`}
              >
                {tab.tabname}
              </button>
            </a>
          ))}
        </nav>

        {/* Slider buttons for mobile */}
        {tabs.length > 3 && (
          <div className="nav_buttons sm:hidden mt-4 flex justify-between">
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-full ${isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={() => !isPrevDisabled && handleSlider("prev")}
              disabled={isPrevDisabled}
            >
              <img
                src="/assets/right-arrow.png"
                alt="Previous"
                className="h-5 w-5 rotate-180"
              />
            </button>
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-full ${isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={() => !isNextDisabled && handleSlider("next")}
              disabled={isNextDisabled}
            >
              <img
                src="/assets/right-arrow.png"
                alt="Next"
                className="h-5 w-5"
              />
            </button>
          </div>
        )}

        {/* Title for desktop */}
        <div className="sm:flex hidden justify-between items-center">
          <h3 className="text-black uppercase tracking-wider basis-[10%]">
            {title}
          </h3>
          <div className="h-[0.1px] bg-black basis-[90%]"></div>
        </div>

        {/* Heading + Subtitle */}
        <div className="flex mt-[30px] lg:mt-[55px] flex-col md:flex-row sm:items-end justify-between">
          <h1 className="text-3xl sm:text-6xl mb-3 sm:mb-0 font-light text-primaryblue font-sangbleu">
            {heading}
          </h1>
          <p className="font-lato text-[14px] text-justify font-[400] tracking-[1px] leading-[27px] lg:max-w-[45%]">
            {subtitle}
          </p>
        </div>

        {/* Discover More */}
        <a href={`#${linkTo}`}>
          <div className="mt-10 flex items-center space-x-2 text-primaryblue cursor-pointer hover:underline">
            <span className="uppercase tracking-wider text-sm font-medium">
              Discover More
            </span>
            <img
              src="/assets/down-arrow-1.png"
              className="h-[20px] object-contain"
              alt="arrow"
            />
          </div>
        </a>
      </div>

      {/* Background image */}
      <img src={imgUrl} alt="aboutus" className="w-full" />
    </section>
  );
};

export default CommonHeroSec;
