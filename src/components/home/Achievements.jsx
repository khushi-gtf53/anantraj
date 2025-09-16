"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievementsData = [
  {
    id: 1,
    image: "/assets/award-1.png",
    title: "Data Center Innovation Excellence Awards 2024",
    text: "Anant Raj Cloud Wins Prestigious Award for 'Best Innovation in Data Center Design and Infrastructure' at Data Center Innovation Excellence Awards 2024",
  },
  {
    id: 2,
    image: "/assets/award-2.jpg",
    title: "Real Estate Excellence Award 2023",
    text: "Recognized for outstanding contributions to sustainable real estate development in 2023.",
  },
  {
    id: 3,
    image: "/assets/award-3.jpg",
    title: "Best Commercial Project Award 2022",
    text: "Honored for the innovative design of our commercial properties in 2022.",
  },
];

const Achievements = () => {
  const [activeAchievement, setActiveAchievement] = useState(achievementsData[0]);
  const swiperRef = useRef(null);
  const imageRefs = useRef([]); // Array to store refs for all images

  const handlePrevClick = () => swiperRef.current?.slidePrev();
  const handleNextClick = () => swiperRef.current?.slideNext();

  const handleSlideChange = (swiper) => {
    setActiveAchievement(achievementsData[swiper.realIndex]);
    const activeImage = imageRefs.current[swiper.realIndex];
    if (activeImage) {
      gsap.fromTo(
        activeImage,
        { scale: 1.8, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 1.7, ease: "power3.out" }
      );
    }
  };

  useEffect(() => {
    if (imageRefs.current[0]) {
      gsap.fromTo(
        imageRefs.current[0],
        { scale: 1.8, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRefs.current[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (swiperRef.current) swiperRef.current.navigation?.update();
  }, []);

  return (
    <section className="bg-[#FBF6F6] px-[20px] lg:px-[100px] lg:py-[90px] py-14">
      <h2
        data-gsap="fade-up"
        data-gsap-duration="1"
        data-gsap-delay="0.5"
        className="font-sangbleu lg:text-left text-center text-primaryred mb-10 uppercase tracking-widest text-[13px] lg:text-[20px] leading-[30px] lg:leading-[40px] font-medium"
      >
        Award-Winning Milestones
      </h2>

      <div className="flex justify-between flex-wrap items-center">
        {/* Image Carousel */}
        <div className="basis-[100%] lg:basis-[55%] overflow-x-hidden relative">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".swiper-prev-journey",
              nextEl: ".swiper-next-journey",
            }}
            onSlideChange={handleSlideChange}
          >
            {achievementsData.map((achievement, index) => (
              <SwiperSlide key={achievement.id}>
                <div className="relative w-full h-[250px] lg:h-[350px] mb-[30px] lg:mb-0">
                  <Image
                    ref={(el) => (imageRefs.current[index] = el)}
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover w-full h-full"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Content */}
        <div className="basis-[100%] lg:text-left text-center lg:basis-[38%] font-lato">
          <h3
            data-gsap="fade-up"
            data-gsap-duration="1"
            data-gsap-delay="0.5"
            className="text-lg font-semibold text-gray-800 mb-6"
          >
            {activeAchievement.title}
          </h3>
          <p
            data-gsap="fade-up"
            data-gsap-duration="1"
            data-gsap-delay="0.5"
            className="text-base leading-relaxed mb-8"
          >
            {activeAchievement.text}
          </p>

          <div className="flex lg:justify-start justify-center items-center gap-2 mb-8">
            <button
              className="swiper-prev-journey cursor-pointer rotate-180"
              onClick={handlePrevClick}
            >
              <Image src="/assets/right-arrow.png" alt="Previous" width={20} height={20} />
            </button>
            <button
              className="swiper-next-journey cursor-pointer"
              onClick={handleNextClick}
            >
              <Image src="/assets/right-arrow.png" alt="Next" width={20} height={20} />
            </button>
          </div>

          <button className="flex mx-auto lg:mx-0 lg:inline-block uppercase font-semibold text-sm text-primaryblue border-y border-primaryblue py-[10px] px-6 tracking-[2px] transition hover:bg-primaryblue hover:text-white">
            EXPLORE MORE Awards
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
