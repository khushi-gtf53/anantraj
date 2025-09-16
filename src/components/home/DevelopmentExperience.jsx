"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const DevelopmentExperience = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    units: 0,
    projects: 0,
    dataCenters: 0,
  });
  const sectionRef = useRef(null);
  const imageRefs = useRef({ desktop: null, mobile: null });

  const targetValues = {
    experience: 50,
    units: 40,
    projects: 20,
    dataCenters: 300,
  };

  const animateCounter = (key, target, duration) => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setCounters((prev) => ({
        ...prev,
        [key]: start >= target ? target : start,
      }));
      if (start >= target) clearInterval(timer);
    }, stepTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          Object.entries(targetValues).forEach(([key, value]) =>
            animateCounter(key, value, 2000)
          );

          // Animate images
          ["desktop", "mobile"].forEach((key) => {
            if (imageRefs.current[key]) {
              gsap.fromTo(
                imageRefs.current[key],
                { scale: 1.2, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
              );
            }
          });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="bg-white" ref={sectionRef}>
      <div className="hidden lg:block relative h-[450px] w-full">
        <Image
          ref={(el) => (imageRefs.current.desktop = el)}
          src="/assets/residential.webp"
          alt="residential"
          fill
          className="object-cover h-[450px] w-full"
          priority
        />
      </div>

      <div className="bg-[#FBF6F6] relative">
        <div className="lg:px-[210px] flex flex-wrap items-start justify-between space-y-[40px] lg:space-y-[0px] py-[40px] lg:py-[60px]">
          <p className="lg:px-0 px-[20px] flex-col lg:flex-row flex flex-wrap items-center justify-center lg:mb-[70px] basis-[50%]">
            <span className="font-sangbleu basis-[30%] lg:basis-auto text-primaryblue text-[40px] lg:text-[50px]">
              {counters.experience}+
            </span>
            <span className="font-lato text-center lg:text-left text-[12px] lg:text-[14px] lg:ml-[40px] font-[400] tracking-[1px] leading-[24px] lg:leading-[28px] uppercase">
              of Real Estate
              <span className="block">Development Experience</span>
            </span>
          </p>

          <p className="lg:px-0 px-[20px] flex-col lg:flex-row flex flex-wrap lg:justify-end justify-center lg:mb-[70px] items-center basis-[50%]">
            <span className="font-sangbleu basis-[30%] lg:basis-auto text-primaryblue text-[40px] lg:text-[50px]">
              {counters.units.toLocaleString()}K+
            </span>
            <span className="font-lato text-center lg:text-left text-[12px] lg:text-[14px] lg:ml-[40px] font-[400] tracking-[1px] leading-[24px] lg:leading-[28px] uppercase">
              units Developed/
              <span className="block">Developing</span>
            </span>
          </p>

          <div className="lg:hidden relative h-[350px] w-full basis-full">
            <Image
              ref={(el) => (imageRefs.current.mobile = el)}
              src="/assets/residential.png"
              alt="residential"
              fill
              className="object-cover h-[350px] w-full"
            />
          </div>

          <p className="lg:px-0 px-[20px] flex-col lg:flex-row flex flex-wrap items-center justify-center basis-[46%]">
            <span className="font-sangbleu basis-[30%] lg:basis-auto text-primaryblue text-[40px] lg:text-[50px]">
              {counters.projects}+
            </span>
            <span className="font-lato text-[12px] text-center lg:text-left lg:text-[14px] lg:ml-[40px] font-[400] tracking-[1px] leading-[24px] lg:leading-[28px] uppercase">
              MSF Real Estate
              <span className="block">Projects Developed</span>
            </span>
          </p>

          <p className="lg:px-0 px-[20px] flex-col lg:flex-row flex flex-wrap lg:justify-end justify-center items-center basis-[50%]">
            <span className="font-sangbleu basis-[30%] lg:basis-auto text-primaryblue text-[40px] lg:text-[50px]">
              {counters.dataCenters}+
            </span>
            <span className="font-lato text-center lg:text-left text-[12px] lg:text-[14px] lg:ml-[40px] font-[400] tracking-[1px] leading-[24px] lg:leading-[28px] uppercase">
              MW Data Centers
              <span className="block">Developed/</span>
              <span className="block">Upcoming</span>
            </span>
          </p>
        </div>

        <div className="relative h-[70px] w-full">
          <Image
            src="/assets/pattern-bg.png"
            alt="pattern-bg"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentExperience;
