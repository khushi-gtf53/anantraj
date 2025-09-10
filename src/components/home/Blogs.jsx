"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const blogSlides = [
  {
    id: 1,
    image: "/assets/2blog.jpg",
    title:
      "Discover the Epitome of Luxury Living at The Estate Residences by Anant Raj Limited, Gurugram",
    para: "Experience the pinnacle of luxury living at The Estate Residences by Anant Raj Limited. Your dream home awaits in the heart of Gurugram.",
  },
  {
    id: 2,
    image: "/assets/1blog.jpg",
    title:
      "Why Investing in Gurgaon’s Luxury Flats is a Game Changer for Real Estate Investors",
    para: "If you're looking to diversify your portfolio or secure a high-value asset in India’s fastest-growing urban market, now is the time to explore Anant Raj’s premium offerings in Gurgaon.",
  },
  {
    id: 3,
    image: "/assets/3blog.webp",
    title:
      "Anant Raj Manesar: Pioneering Innovation at the Heart of IT Development",
    para: "Anant Raj Manesar is more than just an IT Park—it’s a blueprint for the future of enterprise infrastructure in India.",
  },
];

const Blogs = () => {
  const swiperRef = useRef(null);
  const slideRefs = useRef([]);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const triggerImageAnimation = (index) => {
    const img = slideRefs.current[index]?.querySelector("img");
    if (img) {
      img.classList.remove("animate-zoom-fade");
      void img.offsetWidth; // trigger reflow
      img.classList.add("animate-zoom-fade");
    }
  };

  // Animate only once when section comes into view
  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          triggerImageAnimation(0);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Animate on slide change
  useEffect(() => {
    if (hasAnimated) triggerImageAnimation(activeIndex);
  }, [activeIndex, hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="px-[20px] lg:px-[100px] lg:pt-[80px] lg:pb-[40px] pt-[70px] bg-white"
    >
      <h2 className="font-sangbleu lg:text-left text-center text-primaryred mb-10 border-t-[1px] border-black pt-[90px] uppercase tracking-widest leading-[30px] lg:leading-[40px] text-[13px] lg:text-[20px] font-medium">
        Discover Insights. Ignite Imagination
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            nextEl: ".swiper-next-custom",
            prevEl: ".swiper-prev-custom",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {blogSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div ref={(el) => (slideRefs.current[index] = el)}>
                <div className="relative w-full h-[240px] lg:h-[450px] rounded-sm overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                <div className="lg:flex-row flex-col flex items-start justify-between mt-[15px] lg:mt-[25px]">
                  <div className="flex lg:flex-col flex-col justify-between">
                    <p className="text-[16px] lg:text-left text-center font-semibold tracking-[1px]">
                      {slide.title}
                    </p>

                    <div className="lg:mx-0 mx-auto mt-[40px]">
                    <Link href="/blogs">  <button className="text-primaryblue font-semibold w-[100%] lg:w-auto text-sm border-t border-b border-primaryblue px-6 tracking-[2px] py-[10px] hover:bg-primaryblue hover:text-white transition">
                        EXPLORE BLOGS & NEWS
                      </button></Link>
                    </div>
                  </div>

                  <div className="lg:mx-0 mx-auto flex mt-[16px] gap-2">
                    <button
                      aria-label="Previous"
                      className="p-2 swiper-prev-custom hover:bg-gray-200 rounded-full transition"
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
                      className="p-2 swiper-next-custom hover:bg-gray-200 rounded-full transition"
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        .animate-zoom-fade {
          animation: zoomFadeIn 1.5s ease forwards;
        }
        @keyframes zoomFadeIn {
          0% {
            opacity: 0;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Blogs;
