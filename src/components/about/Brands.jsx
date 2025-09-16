"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Brands = () => {
  const [activeSection, setActiveSection] = useState(0);
  const pillarRef = useRef(null);
  const sliderRef = useRef(null);
  const headerRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sections = [
    {
      title: "LINEAGE-LED",
      subtitle: "CREDIBILITY",
      description:
        "Anant Raj stands on decades of trust, stewardship, and deep-rooted land ownership, offering not just projects, but peace of mind built over generations.",
      image: "/assets/pillar.webp",
    },
    {
      title: "CULTURALLY",
      subtitle: "INTELLIGENT CRAFT",
      description:
        "Every community is imagined with the Indian ethos at heart, blending architectural sensitivity with modern sensibilities for today’s evolved buyer.",
      image: "/assets/pillar.webp",
    },
    {
      title: "FUTURE-FIRST",
      subtitle: "THINKING",
      description:
        "From smart townships to ESG-conscious designs, Anant Raj creates spaces that anticipate tomorrow, not just adapt to it.",
      image: "/assets/pillar.webp",
    },
    {
      title: "SCALE WITH",
      subtitle: "INTEGRITY",
      description:
        "Townships designed with long-term human value in mind — low density, high livability, integrated wellness, and an innate respect for the land itself.",
      image: "/assets/pillar.webp",
    },
  ];
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesToShow(1);
      else if (width < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const changeSection = (direction) => {
    const currentSection = activeSection;
    let nextSection =
      direction === "next" ? currentSection + 1 : currentSection - 1;

    if (nextSection < 0) nextSection = sections.length - 1;
    if (nextSection >= sections.length) nextSection = 0;

    const slides = Array.from(sliderRef.current.children[0].children);
    const slideWidth = slides[0]?.offsetWidth || 250;

    gsap.to(slides, {
      duration: 0.8,
      x: direction === "next" ? `-=${slideWidth}` : `+=${slideWidth}`,
      ease: "expo.out",
      onComplete: () => {
        setActiveSection(nextSection);
        gsap.set(slides, { x: 0 });

        if (direction === "next") {
          sliderRef.current.children[0].appendChild(slides[0]);
        } else {
          sliderRef.current.children[0].prepend(slides[slides.length - 1]);
        }
      },
    });

    gsap.to(headerRef.current, {
      duration: 0.4,
      opacity: 0,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(headerRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
        });
      },
    });

    gsap.to(pillarRef.current, {
      duration: 0.6,
      scale: 0.95,
      opacity: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(pillarRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
        });
      },
    });
  };

  return (
    <section id="brandpillars" className="px-[20px] py-[40px] sm:p-[100px]">
      <h2 className="text-primaryred mb-[40px] uppercase text-left tracking-[2px] leading-[30px] lg:leading-[40px] font-sangbleu text-[12.5px] lg:text-[20px]">
        <span>Our Brand Pillars: The Foundation </span>
        <span className="block">of Everything We Build</span>
      </h2>
      <div className="border-b border-black/30 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap">
            <div
              ref={headerRef}
              className="mb-8 sm:flex items-center basis-[100%] justify-between flex-wrap min-h-[100px]"
            >
              <div className="basis-[10%] sm:text-center">
                <h3 className="text-sm font-medium text-primaryblue tracking-[1.5px]">
                  {sections[activeSection].title}
                </h3>
                <h2 className="text-sm font-medium text-primaryblue mb-4 sm:mb-0 tracking-[1.5px]">
                  {sections[activeSection].subtitle}
                </h2>
              </div>
              <div className="basis-[20%] w-full sm:w-[200px] my-2 h-[1px] bg-black"></div>
              <p className="basis-[60%] font-lato text-[14px] font-[400] tracking-[1px] leading-[27px]">
                {sections[activeSection].description}
              </p>
            </div>

            <div className="grid grid-cols-12 h-[400px] w-full ">
              <div className="col-span-4 sm:col-span-2 flex items-end">
                <div className="relative h-[400px] w-full">
                  <Image
                    ref={pillarRef}
                    src={sections[activeSection].image}
                    alt="pillar"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="col-span-3 flex items-center gap-2 lg:gap-4">
                <button
                  onClick={() => changeSection("prev")}
                  className="lg:p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Image
                    src="/assets/right-arrow.png"
                    alt="left"
                    width={20}
                    height={20}
                    className="rotate-[180deg]"
                  />
                </button>
                <button
                  onClick={() => changeSection("next")}
                  className="lg:p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Image
                    src="/assets/right-arrow.png"
                    alt="right"
                    width={20}
                    height={20}
                  />
                </button>
              </div>

              <div
                className="col-span-5 sm:col-span-7 flex items-center sm:items-end  overflow-hidden"
                ref={sliderRef}
              >
                <div className="flex justify-between lg:items-end w-full">
                  {Array.from({ length: slidesToShow + 1 }).map((_, offset) => {
                    const index = (activeSection + 1 + offset) % sections.length;
                    const section = sections[index];
                    return (
                      <div
                        key={`${index}-${offset}`}
                        className="flex w-[250px] flex-col items-start sm:items-center justify-end px-2"
                        style={{ flex: "0 0 auto" }}
                      >
                        <h4 className="text-[10px] sm:text-[15px] text-center font-medium text-[#263A7F80] tracking-[1.5px] mb-1">
                          {section.title}
                        </h4>
                        <h4 className="text-[10px] sm:text-[15px] text-center font-medium text-[#263A7F80] tracking-[1.5px]">
                          {section.subtitle}
                        </h4>
                        <div className="pt-7 h-[150px] relative w-full">
                          <Image
                            src={section.image}
                            alt="pillar"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
