"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonHeading from "../../common/CommonHeading";
import './amenities.css';

const am_points = [
  {
    img: "assets/township/amenities/clubhouse.jpg",
    headng: "Club house",
  },
  {
    img: "assets/township/amenities/clubhouse.jpg",
    headng: "Green Areas",
  },
  {
    img: "assets/township/amenities/clubhouse.jpg",
    headng: "Parks",
  },
  {
    img: "assets/township/amenities/clubhouse.jpg",
    headng: "Kids Play Area",
  },
  {
    img: "assets/township/amenities/clubhouse.jpg",
    headng: "Wide Roads",
  },
  {
    img: "assets/township/amenities/clubhouse.jpg",
    headng: "Gated Community",
  },
  {
    img: "assets/township/amenities/clubhouse.jpg",
    headng: "Security",
  },
];

const TownshipAmenities = () => {
  const containerRef = useRef(null);
  const titlesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heading = document.querySelector(".topsec");
    if (heading) {
      ScrollTrigger.create({
        trigger: ".township_amenities_section",
        start: "top top",
        end: "bottom bottom",
        pin: heading,
        pinSpacing: false,
      });
    }

    const sections = gsap.utils.toArray(".single_am");
    if (sections.length === 0) return;

    sections.forEach((sec, i) => {
      const img = sec.querySelector("img");
      const title = sec.querySelector(".title");
      titlesRef.current[i] = title;

      gsap.set(img, { y: 400, opacity: 0.5 });
      gsap.set(title, { color: "#000000", opacity: i === 0 ? 1 : 0 });
    });

    sections.forEach((sec, i) => {
      const img = sec.querySelector("img");
      const title = titlesRef.current[i];

      const tl = gsap.timeline({
          scrollTrigger: {
          trigger: sec,
          start: "top center",
          end: "bottom center",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      if (i > 0) {
        tl.to(title, {
          opacity: 1,
          color: "#000000",
          ease: "power2.out",
          duration: 0.2,
        });
      }

      tl.to(img, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.8,
      }, "+=0.1") 
      .to(
        title,
        {
          color: "#FFFFFF",
          ease: "none",
          duration: 0.5,
        },
        "<" 
      )
     
      .to(img, {
        opacity: 0,
        ease: "power2.out",
        duration: 0.3,
      }, "+=0.2")
      .to(
        title,
        {
          opacity: 0,
          ease: "power2.out",
          duration: 0.3,
        },
        "<"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="township_amenities_section relative py-[100px] bg-[#FBF6F6]">
      <div className="container">
        <div className="topsec mb-40">
          <CommonHeading customClass="mx-auto lg:max-w-[600px] text-center">
            Stunning Luxury Prime Residences, Designed For Life
          </CommonHeading>
          <ul className="flex gap-4 points justify-center items-center mt-[50px] mb-[100px]">
            {am_points.map((item, index) => (
              <li key={index} className="flex gap-2 tracking-[1px] items-center">
                {item.headng}
                {index !== am_points.length - 1 && <span className="divider"> | </span>}
              </li>
            ))}
          </ul>
        </div>
        <div className="am_content relative" ref={containerRef}>
          {am_points.map((item, index) => (
            <div
              className="single_am my-20 max-w-[50%] mx-auto relative"
              key={index}
            >
              <h4 
                className="title absolute font-sangbleu text-[40px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[10]"
                ref={(el) => (titlesRef.current[index] = el)}
              >
                {item.headng}
              </h4>
              <img
                src={item.img}
                alt={item.headng}
                className="img-fluid w-full z-[5]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TownshipAmenities;