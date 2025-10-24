"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonHeading from "../../common/CommonHeading";
import './experience.css';

const images = [
  "assets/township/experience/image1.jpg",
  "assets/township/experience/image1.jpg",
  "assets/township/experience/image1.jpg",
  "assets/township/experience/image1.jpg",
  "assets/township/experience/image1.jpg",
];

const TownshipExperience = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    //pin the section and animate the center image
    gsap.to(".experience_section", {
      scrollTrigger:{
        trigger:".experience_section",
        start:"top top",
        end: "bottom top",
        pin:true,
        scrub:true,
        markers:true,
      }
    })

    // Animate the width of the center image on scroll
    gsap.to(".image_col:nth-child(3)", {
      scrollTrigger:{
        trigger: ".experience_section",
        start: "top center", // When the section top reaches the center of the viewport
        end: "bottom top", // When the section bottom reaches the top
        pin: false,
        scrub: true,
      },
      width:"110%",
      ease:"power2.out"
    })
  }, [])

  return (
    <div className="experience_section py-[100px] bg-[#FBF6F6]">
      <div className="container">
        <div className="content text-center mx-auto leading-[26px]">
          <CommonHeading customClass="mx-auto lg:max-w-[700px]">
            Experience Excellence In Our Premier Properties
          </CommonHeading>
          <div className="images mt-[80px] flex justify-center gap-[20px]">
            {images.map((item, index) => (
              <div
                className="image_col relative overflow-hidden w-full flex-shrink-0"
                key={index}
              >
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TownshipExperience;
