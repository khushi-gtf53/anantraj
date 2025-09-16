"use client";
import { Lightbox } from "yet-another-react-lightbox";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "yet-another-react-lightbox/styles.css";
import Accordion from "../../common/Accordion";

const PlatterProjects = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  const openLightbox = (images, index) => {
    setLightboxSlides(images.map((src) => ({ src })));
    setOpenIndex(index);
    setLightboxOpen(true);
  };

  const renderProject = (projects) => (
    <div className="flex flex-col">
      <Swiper
        modules={[Navigation]}
        loop={true}
        slidesPerView={"auto"}
        speed={600}
        spaceBetween={100}
        allowTouchMove={true}
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
                <img
                  src={project.image}
                  alt={project.name}
                  className="flex-1 lg:mb-[0] mb-[20px] object-cover w-[100%] cursor-pointer"
                  onClick={() => openLightbox([project.image], 0)}
                />
              ) : (
                <div className="flex-1 lg:mb-[0] mb-[20px] bg-gray-200 w-[100%] h-[300px]" />
              )}

              <div className="project_info flex lg:gap-0 gap-[20px] flex-col justify-evenly lg:items-end">
                <div className="flex flex-col lg:items-end gap-2">
                  <div className="project_name uppercase font-sangbleu tracking-wider">
                    {project.name}
                  </div>
                  <div className="project_location uppercase">
                    {project.location}
                  </div>
                </div>
                <div className="flex flex-col lg:items-end gap-2">
                  <div className="project_typology tracking-wider uppercase">
                    {project.typology}
                  </div>
                  <div className="project_status tracking-wider uppercase">
                    {project.status}
                  </div>
                  <div className="download py-2 mt-5 border-y text-center uppercase text-primaryblue font-bold">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Explore Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div
        className={`flex justify-end lg:mt-[10px] ${
          projects.length > 1 ? "block" : "hidden"
        } lg:mb-0 mb-[10px]`}
      >
        <IoIosArrowRoundBack className="cursor-pointer banner-button-next text-[#8e8d8d]" size={30} />
        <IoIosArrowRoundForward className="cursor-pointer banner-button-prev text-[#8e8d8d]" size={30} />
      </div>
    </div>
  );

  return (
    <>
      <section id="projects" className="platter_projects relative w-full wrapper bg-[#FBF6F6]">
        {tabs.map((tab) => (
          <Accordion
            key={tab.key}
            label={tab.label}
            isOpen={activeTab === tab.key}
            onClick={() => setActiveTab(activeTab === tab.key ? "" : tab.key)}
          >
            {renderProject(tab.projects)}
          </Accordion>
        ))}
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={openIndex}
      />
    </>
  );
};

export default PlatterProjects;
