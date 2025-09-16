"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonHeading from "../../common/CommonHeading";
import "./amenities.css";

gsap.registerPlugin(ScrollTrigger);

const am_points = [
  { img: "assets/township/amenities/amenities_1.jpg", headng: "Club house" },
  { img: "assets/township/amenities/amenities_1.jpg", headng: "Green Areas" },
  { img: "assets/township/amenities/amenities_1.jpg", headng: "Parks" },
  { img: "assets/township/amenities/amenities_1.jpg", headng: "Kids Play Area" },
  { img: "assets/township/amenities/amenities_1.jpg", headng: "Wide Roads" },
  { img: "assets/township/amenities/amenities_1.jpg", headng: "Gated Community" },
  { img: "assets/township/amenities/amenities_1.jpg", headng: "Security" },
];

const TownshipAmenities = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index

  useEffect(() => {
    gsap.config({ trialWarn: false });

    const sections = gsap.utils.toArray(".single_am");
    if (sections.length === 0) return;

    gsap.set(sections, { opacity: 0 });
    gsap.set(sections[0], { opacity: 1 });  // Ensure the first image is visible initially
    gsap.set(headingRef.current, { "--target": "0%" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".township_amenities_section",
        start: "top top",
        end: `+=${am_points.length * 100}%`,
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor((progress * am_points.length) - 0.2),
            am_points.length - 1
          );

          if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex); // Update index when it changes
          }
        },
      },
    });

    sections.forEach((sec, i) => {
      if (i > 0) {
        tl.to(sections[i-1], {
            opacity: 0,  // Fade out the previous image
            duration: 0.4,  // Fade out duration
            ease: "power2.out",
          })
          .to(sections[i], {
            opacity: 1,  // Fade in the next image
            y:'-74vh',
            duration: 0.4,  // Fade in duration
            ease: "power2.out",
          }, "<")  // Make the fade-in start after the fade-out
          .to(headingRef.current, {
            "--target": "100%",
            duration: 0.15,
            ease: "power2.out",
          }, "<+=0.15")
          .set(headingRef.current, { "--target": "0%" }, ">+=0.2");
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [currentIndex]);  // Re-run the effect when currentIndex changes

  return (
    <div className="township_amenities_section h-[100vh] relative py-[100px] bg-[#FBF6F6]">
      <div className="container h-[100%]">
        <div className="topsec flex h-[100%] flex-col justify-between relative mb-40">
          <div>
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
          <h2
            ref={headingRef}
            className="font-sangbleu heading_anim relative z-[999] m-[auto] uppercase text-[50px] text-center gradient-text"
            style={{
              background: "linear-gradient(to top, #fff var(--target), #000 var(--target))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "#000",
            }}
            aria-live="polite"
          >
            {am_points[currentIndex]?.headng}
          </h2>
        </div>
        <div className="am_content relative" ref={containerRef}>
          {am_points.map((item, index) => (
            <div
              className="single_am my-20 max-w-[50%] mx-auto absolute top-0 left-0 right-0"
              key={index}
              style={{
                opacity: currentIndex === index ? 1 : 0, // Fade out other images
              }}
            >
              <img
                src={item.img}
                alt={item.headng}
                className="img-fluid w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TownshipAmenities;
