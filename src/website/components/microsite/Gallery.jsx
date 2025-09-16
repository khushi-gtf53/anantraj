"use client";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import CommonHeading from "../../components/common/CommonHeading";

const Gallery = ({ title = "Once In A Lifetime Experience", images = [] }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSlides, setLightboxSlides] = useState([]);
    const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      <section className="gallery_section mb-20 relative w-full sm:h-screen wrapper bg-[#FBF6F6]">
        <div className="heading flex items-center justify-between mb-10">         
          <CommonHeading> {title}</CommonHeading>

          <div className="opacity-70 flex gap-2 items-center">
            <div className="gallery-button-prev cursor-pointer">
              <IoIosArrowRoundBack size={40} />
            </div>
            <div className="gallery-button-next cursor-pointer">
              <IoIosArrowRoundForward size={40} />
            </div>
          </div>
        </div>

        <div className="gallery relative h-[30vh] sm:h-[60vh] w-full">
          <Swiper
            modules={[Navigation]}
            loop={true}
            centeredSlides={true}
            slidesPerView={1.5}
            spaceBetween={30}
            speed={1000}
            navigation={{
              nextEl: ".gallery-button-next",
              prevEl: ".gallery-button-prev",
            }}
            className="w-full h-full"
          >
            {images.map((image, idx) => (
              <SwiperSlide
               onClick={() => {
                  setLightboxSlides(images.map((s) => ({ src: s.src })));
                  setOpenIndex(idx);
                  setLightboxOpen(true);
                }}
              key={idx}>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={`gallery-image-${idx}`}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

export default Gallery;
