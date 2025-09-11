"use client";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState, useRef } from "react";
import CommonHeading from "../../components/common/CommonHeading";
import Image from "next/image";

const Gallery = ({ title = "Once In A Lifetime Experience", images = [] }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Safe Lightbox array
  const formattedSlides = images.map((s) => ({ src: s.src }));

  return (
    <>
      <section className="gallery_section mb-20 relative w-full h-[65vh] sm:h-screen wrapper bg-[#FBF6F6]">
        {/* Heading + Arrows */}
        <div className="heading flex items-center justify-between mb-10">
          <CommonHeading>{title}</CommonHeading>

          <div className="opacity-70 flex gap-2 items-center">
            <div ref={prevRef} className="gallery-button-prev cursor-pointer">
              <IoIosArrowRoundBack size={40} />
            </div>
            <div ref={nextRef} className="gallery-button-next cursor-pointer">
              <IoIosArrowRoundForward size={40} />
            </div>
          </div>
        </div>

        {/* Swiper */}
        <div className="gallery relative h-[30vh] sm:h-[60vh] w-full">
          <Swiper
            modules={[Navigation]}
            loop={true}
            centeredSlides={true}
            slidesPerView={1.5}
            spaceBetween={30}
            speed={1000}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="w-full h-full"
          >
            {images.map((image, idx) => (
              <SwiperSlide
                key={idx}
                onClick={() => {
                  setLightboxSlides(formattedSlides);
                  setOpenIndex(idx);
                  setLightboxOpen(true);
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={image.src}
                    alt={`gallery-image-${idx}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Background Pattern */}
        <Image
          src="/assets/pattern-bg.png"
          alt="pattern-bg"
          width={1920}
          height={70}
          priority
          className="h-[70px] bg-[#FBF6F6] absolute left-0 bottom-0 w-full object-cover"
        />
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

export default Gallery;
