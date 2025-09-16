"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useRef, useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Banner = ({ slides = [] }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Lightbox state
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section className="microsite_banner relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        slidesPerView="auto"
        spaceBetween={0}
        speed={600}
        centeredSlides={false}
        allowTouchMove={false}
        className="banner_slider overflow-hidden w-full h-[65vh]"
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
      >
        {slides.map((imgSrc, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto flex justify-center items-center"
          >
            <Image
              src={imgSrc}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={800}
              className="object-cover h-[65vh] w-auto cursor-pointer"
              priority={index === 0} 
              onClick={() => {
                setPhotoIndex(index);
                setOpen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="banner_navigation bg-[#FBF6F6] w-full h-[5vh] px-5">
        <div className="opacity-70 flex gap-2 justify-end items-center h-full">
          <div ref={prevRef} className="banner-button-prev cursor-pointer">
            <IoIosArrowRoundBack size={40} />
          </div>
          <div ref={nextRef} className="banner-button-next cursor-pointer">
            <IoIosArrowRoundForward size={40} />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={slides.map((src) => ({ src }))}
      />
    </section>
  );
};

export default Banner;
