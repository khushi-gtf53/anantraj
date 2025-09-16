"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    year: "1969",
    image: "./assets/timeline-1.png",
    text: "Anant Raj was founded in New Delhi, establishing a legacy of quality and ethical business practices.",
  },
  {
    year: "1985",
    image: "./assets/timeline/1985.jpg",
    text: "Incorporated as Anant Raj Clay Products Ltd., began manufacturing glazed ceramic tiles.",
  },
  {
    year: "1989",
    image: "./assets/timeline/1989.jpg",
    text: "Launched ceramic tiles under the brand name ‘Romano’.",
  },
  {
    year: "1993",
    image: "./assets/timeline/1993.jpg",
    text: "Diversified into LPG cylinder manufacturing.",
  },
  {
    year: "1995",
    image: "./assets/timeline/1995.jpg",
    text: "Name changed to Anant Raj Industries Ltd.; major production expansion.",
  },
  {
    year: "1997",
    image: "./assets/timeline/1997.jpg",
    text: "Increased tile production capacity to 8,000 sq. mtrs/day.",
  },
  {
    year: "2005",
    image: "./assets/timeline/2005.jpg",
    text: "Entered real estate development; merged five group companies in hospitality, IT parks, and service apartments.",
  },
  {
    year: "2006",
    image: "./assets/timeline/2006.jpg",
    text: "Further group company mergers; delisted from Delhi Stock Exchange.",
  },
  {
    year: "2007",
    image: "./assets/timeline/2007.jpg",
    text: "Merged twelve more group companies; share split from ₹10 to ₹2.",
  },
  {
    year: "2010",
    image: "./assets/timeline/2010.jpg",
    text: "Acquired Jubilant Software Services and Aakarshak Realtors as wholly owned subsidiaries.",
  },
  {
    year: "2011",
    image: "./assets/timeline/2011.jpg",
    text: "Launched key residential projects and completed Moments Mall, Kirti Nagar.",
  },
  {
    year: "2012",
    image: "./assets/timeline/2012.jpg",
    text: "Launch of Anant Raj Estate with sale of plots in pocket A & B. Development commenced in South-West portion of the township.",
  },
  {
    year: "2013",
    image: "./assets/timeline/2013.jpg",
    text: "Launch of Estate Villas. Possession of Estate Plots.",
  },
  {
    year: "2014",
    image: "./assets/timeline/2014.jpg",
    text: "Launch of Estate Floors.",
  },
  {
    year: "2016",
    image: "./assets/timeline/2016.jpg",
    text: "We Handed over our first Estate Villa.",
  },
  {
    year: "2017",
    image: "./assets/timeline/2017.jpg",
    text: "A mixed-use commercial development “Joy Square” was launched in partnership with AIPL.",
  },
  {
    year: "2019",
    image: "./assets/timeline/2019.jpg",
    text: "Birla Navya, a joint venture project between Anant Raj Limited and Birla Estates Pvt Ltd, a 800 floors project was launched.",
  },
  {
    year: "2020",
    image: "./assets/timeline/2020.jpg",
    text: "Development Commenced in North-East portion of the township.",
  },
  {
    year: "2022",
    image: "./assets/timeline/2022.jpg",
    text: "Launch and Sale of Ashok Estate. Launch of Estate Mansions.",
  },
  {
    year: "2024",
    image: "./assets/timeline/2024.jpg",
    text: "Launch of our first luxury high rise project, The Estate Residencies.",
  },
  {
    year: "2025",
    image: "./assets/timeline/2025.jpg",
    text: "Launch of our ready to move in 400sq yd floors The Estate Apartments.",
  },
];

const Journey = () => {
  const [activeYear, setActiveYear] = useState("1969");
  const swiperRef = useRef(null);
  const yearRefs = useRef({});
  const yearContainerRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const hasMounted = useRef(false);
  const isUserInteraction = useRef(false);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }

    const timer = setTimeout(() => {
      hasMounted.current = true;
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    const newYear = slides[currentIndex].year;
    setActiveYear(newYear);

    if (hasMounted.current && isUserInteraction.current) {
      const yearElement = yearRefs.current[newYear];
      if (yearElement && yearContainerRef.current) {
        yearElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }

    isUserInteraction.current = false;
  };

  const handleYearClick = (year) => {
    isUserInteraction.current = true;
    const slideIndex = slides.findIndex((slide) => slide.year === year);
    if (slideIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideToLoop(slideIndex);
      setActiveYear(year);

      if (hasMounted.current) {
        const yearElement = yearRefs.current[year];
        if (yearElement && yearContainerRef.current) {
          yearElement.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }
      }
    }
  };

  const handleNextClick = () => {
    isUserInteraction.current = true;
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevClick = () => {
    isUserInteraction.current = true;
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section className="relative px-[20px] lg:px-[100px] py-[40px] lg:py-[100px] bg-white">
      <div className="relative z-[3] mx-auto">
        <h2
          data-gsap="fade-up"
          data-gsap-duration="1"
          data-gsap-delay="0.5"
          className="text-primaryred lg:text-left text-center font-sangbleu mb-[40px] uppercase tracking-[2px] leading-[30px] lg:leading-[40px] text-[13px] lg:text-[20px]"
        >
          Empowering Dreams: Our Journey to Success
        </h2>

        {/* Year Navigation */}
        <div
          className="flex flex-nowrap overflow-x-auto items-center text-[35px] lg:text-[40px] tracking-[1px] pt-5 mb-6 text-primaryblue font-sangbleu border-t border-black text-2xl font-medium whitespace-nowrap scrollbar-hide"
          ref={yearContainerRef}
        >
          {slides.map((slide) => (
            <span
              key={slide.year}
              className={`cursor-pointer lg:text-start text-center min-w-[50%] md:min-w-[25%] ${
                activeYear === slide.year ? "text-primaryblue" : "text-gray-400"
              }`}
              onClick={() => handleYearClick(slide.year)}
              ref={(el) => (yearRefs.current[slide.year] = el)}
            >
              {slide.year}
            </span>
          ))}
        </div>

        {/* Swiper */}
        <div className="relative mt-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            initialSlide={0}
            navigation={{
              prevEl: ".swiper-prev-timeline",
              nextEl: ".swiper-next-timeline",
            }}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onTouchStart={() => {
              isUserInteraction.current = true; // ✅ Detect mobile swipe
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.year}>
                <div className="flex flex-col md:flex-row items-start md:items-center flex-wrap gap-6">
                  <div className="w-full md:w-[55%]">
                    <img
                      src={slide.image}
                      alt={`Timeline ${slide.year}`}
                      className="object-cover w-full h-[200px] md:h-[350px]"
                    />
                  </div>
                  <div className="w-full lg:text-left text-center md:w-[30%] md:ml-[60px] font-lato">
                    <h3 className="text-xl md:text-2xl font-normal text-primaryblue mt-4 md:mt-0">
                      {slide.year}
                    </h3>
                    <p className="my-4 tracking-[1px] leading-[26px] text-sm md:text-base">
                      {slide.text}
                    </p>
                    <div className="flex lg:justify-start justify-center items-center gap-2 mt-4">
                      <button
                        onClick={handlePrevClick}
                        className="cursor-pointer swiper-prev-timeline rotate-180"
                        ref={prevRef}
                      >
                        <img
                          alt="Previous"
                          className="h-[20px] object-cover"
                          src="./assets/right-arrow.png"
                        />
                      </button>
                      <button
                        onClick={handleNextClick}
                        className="cursor-pointer swiper-next-timeline"
                        ref={nextRef}
                      >
                        <img
                          alt="Next"
                          className="h-[20px] object-cover"
                          src="./assets/right-arrow.png"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Journey;
