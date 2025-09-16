"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Accordion from "../../common/Accordion";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
  loading: () => null,
});

import "yet-another-react-lightbox/styles.css";

const PlatterProjects = ({ tabs = [] }) => {
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
   const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");

  const openLightbox = (images, index) => {
    setLightboxSlides(images.map((src) => ({ src })));
    setOpenIndex(index);
    setLightboxOpen(true);
  };

  const renderProject = (projects) => (
    <div className="flex flex-col">
      <Swiper
        modules={[Navigation]}
        loop={projects.length > 1}
        slidesPerView="auto"
        speed={600}
        spaceBetween={100}
        allowTouchMove
        className="platter_slider overflow-hidden lg:order-[0] order-[1] w-full"
        navigation={{
          nextEl: ".banner-button-prev",
          prevEl: ".banner-button-next",
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: "auto" },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="project_img swiper_slide_container">
            <div className="lg:flex gap-[30px] lg:pb-0 pb-[20px]">
              {project.image ? (
                <div className="flex-1 lg:mb-0 mb-[20px] cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={800}
                    height={500}
                    className="object-cover w-full h-auto"
                    onClick={() => openLightbox([project.image], 0)}
                    priority={index === 0}
                  />
                </div>
              ) : (
                <div className="flex-1 lg:mb-0 mb-[20px] bg-gray-200 w-full h-[300px]" />
              )}

              <div className="project_info flex lg:gap-0 gap-[20px] flex-col justify-evenly lg:items-end">
                <div className="flex flex-col lg:items-end gap-2">
                  <div className="project_name uppercase font-sangbleu tracking-wider">
                    {project.name}
                  </div>
                  <div className="project_location uppercase common_font">
                    {project.location}
                  </div>
                </div>
                <div className="flex flex-col lg:items-end gap-2">
                  <div className="project_typology tracking-wider uppercase common_font">
                    {project.typology}
                  </div>
                  <div className="project_status tracking-wider uppercase common_font">
                    {project.status}
                  </div>
                  {project.link && (
                    <div className="download py-2 mt-5 border-y text-center uppercase text-primaryblue font-bold">
                      <a href={project.link} rel="noopener noreferrer">
                        Explore Project
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {projects.length > 1 && (
        <div className="flex justify-end lg:mt-[10px] lg:mb-0 mb-[10px]">
          <IoIosArrowRoundBack
            className="cursor-pointer banner-button-next text-[#8e8d8d]"
            size={30}
          />
          <IoIosArrowRoundForward
            className="cursor-pointer banner-button-prev text-[#8e8d8d]"
            size={30}
          />
        </div>
      )}
    </div>
  );

  return (
    <>
      <section
        id="discover"
        className="platter_projects relative w-full wrapper bg-[#FBF6F6]"
      >
        {tabs.map((tab) => (
          
          <Accordion
            id={tab.key}
            key={tab.key}
            label={tab.label}
            isOpen={activeTab === tab.key}
            // onClick={() => {
            //   const newTab = activeTab === tab.key ? "" : tab.key;
            //   const element = document.getElementById(tab.key);
            //   if (element) {  
            //     element.scrollIntoView({ behavior: "smooth" });
            //   }
            // }}
             onClick={() => setActiveTab(activeTab === tab.key ? "" : tab.key)}
          >
            {renderProject(tab.projects)}
          </Accordion>
        ))}
        <Image
          src="/assets/pattern-bg.png"
          alt="pattern-bg"
          width={1920}
          height={70}
          priority
          className="h-[70px] bg-[#FBF6F6] absolute left-0 bottom-0 w-full object-cover"
        />
      </section>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides}
          index={openIndex}
        />
      )}
    </>
  );
};

export default PlatterProjects;