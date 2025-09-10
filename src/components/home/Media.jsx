"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const mediaArticles = [
  {
    id: 1,
    logo: "/assets/media1.png",
    source: "CNBC TV18",
    text: "Anant Raj shares are up 180% so far in 2024; Motilal Oswal sees further upside",
  },
  {
    id: 2,
    logo: "/assets/media2.png",
    source: "TechCircle",
    text: "Anant Raj Cloud ropes in Orange Business for Cloud and Data Center Expansion",
  },
  {
    id: 3,
    logo: "/assets/media3.png",
    source: "Business Standard",
    text: "Anant Raj climbs 5%; hits new high on allotment of warrants to promoters",
  },
  {
    id: 4,
    logo: "/assets/angelone.png",
    source: "Business Standard",
    text: "Anant Raj Hits New High, Rises 5% After Allotment of Warrants to Promoter",
  },
  {
    id: 5,
    logo: "/assets/et.webp",
    source: "Business Standard",
    text: "Anant Raj Ltd targets Rs 1,200 crore revenue from data center and cloud services business by FY27",
  },
];

const Media = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="bg-white pt-16 px-[20px] lg:px-[100px]">
      <h2 className="font-sangbleu text-center text-primaryred mb-[35px] lg:mb-20 uppercase tracking-widest text-[13px] lg:text-[20px] leading-[30px] lg:leading-[40px] font-medium">
        Press & Media: Stay Informed & Inspired
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={100}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mb-[15px] lg:mb-20"
      >
        {mediaArticles.map((article) => (
          <SwiperSlide key={article.id}>
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative h-[70px] w-[100%] lg:w-[200px]">
                <Image
                  src={article.logo}
                  alt={article.source}
                  fill
                  className="object-contain"
                  priority={article.id === 1}
                />
              </div>
              <p className="text-sm mt-[35px] text-center lg:text-left tracking-[1px] leading-[26px] max-w-xs">
                {article.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom controls */}
      <div className="flex lg:flex-row flex-col-reverse justify-between lg:items-center">
        <button className="text-primaryblue mx-auto lg:mx-0 font-semibold lg:mt-0 mt-[25px] lg:w-auto w-[80%] text-sm border-t border-b border-primaryblue px-6 tracking-[2px] py-[10px] hover:bg-primaryblue hover:text-white transition">
          EXPLORE MORE NEWS
        </button>

        <div className="flex lg:justify-start justify-center">
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="p-2 hover:bg-gray-200 rounded-full transition"
          >
            <Image
              src="/assets/right-arrow.png"
              alt="Previous"
              width={20}
              height={20}
              className="rotate-180"
            />
          </button>
          <button
            aria-label="Next"
            onClick={handleNext}
            className="p-2 hover:bg-gray-200 rounded-full transition"
          >
            <Image
              src="/assets/right-arrow.png"
              alt="Next"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Media;
