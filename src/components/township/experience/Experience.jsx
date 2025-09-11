"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonHeading from "../../common/CommonHeading";
import "./experience.css";

const images = [
  "assets/township/experience/image1.jpg",
  "assets/township/experience/image2.jpg",
  "assets/township/experience/image3.jpg",
  "assets/township/experience/image4.jpg",
  "assets/township/experience/image5.jpg",
];

const TownshipExperience = () => {
    if(typeof window !== 'undefined')return
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const imageSection = document.querySelector(".images");
    const projectSections = gsap.utils.toArray(".project_sec");
  
    if (!imageSection || projectSections.length === 0) return;
  
    // ---- Center image grow animation (same as before) ----
    const imageHeight = 10;
    const targetHeight = 100;
    const heightDifference = targetHeight - imageHeight;
    const endValue = heightDifference * 50; // aapka multiplier
  
    // IMPORTANT: image ko itne lambe time tak pin rakho ki saare projects stack ho saken
    const extraForProjects = window.innerHeight * projectSections.length + 200; // +buffer
    const imagePin = gsap.to(".image_col:nth-child(3)", {
      scrollTrigger: {
        trigger: imageSection,
        start: "top top",
        end: `+=${endValue + window.innerHeight + extraForProjects}`, // 🔴 yahi trick
        pin: true,
        scrub: 1,
        markers: false,
        anticipatePin: 1,
      },
      width: "100vw",
      height: "100vh",
      filter: "brightness(0.5)",
      ease: "none",
    });
  
    // ---- Project sections ko one-by-one stack pin ----
    projectSections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight}`, // har section ~1 viewport ke liye pin
        pin: true,
        pinSpacing: false, // stack effect
        anticipatePin: 1,
        // markers: true,
      });
    });
  
    // Cleanup
    return () => {
      imagePin?.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div className="main_sec">
        <div className="experience_section pt-[100px] bg-[#FBF6F6]">
        <div className="container">
          <div className="content text-center mx-auto leading-[26px] relative">
            <CommonHeading customClass="mx-auto lg:max-w-[700px]">
              Experience Excellence In Our Premier Properties
            </CommonHeading>
            <div className="images flex justify-center gap-[20px] py-[80px]">
              {images.map((item, index) => (
                <div
                  className="image_col relative overflow-hidden w-full flex-shrink-0"
                  key={index}
                  style={{ backgroundImage: `url(${item})` }}
                ></div>
              ))}
            </div>
            <div className="image_content absolute bottom-[80px] text-center mx-auto leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
              <h5 className="text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu">
                The Estate Residences
              </h5>
              <p className="text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]">
                Sector 63A, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="township_projects_section relative">
        <div className="project_sec relative">
          <img
            src="assets/township/projects/project.webp"
            alt="experience image 1"
            className="img-fluid w-full bg_img"
          />
          <div className="container">
            <div className="content absolute bottom-[80px] text-center mx-auto leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
              <h5 className="text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu">
                The Estate Residences
              </h5>
              <p className="text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]">
                Sector 63A, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <div className="project_sec relative">
          <img
            src="assets/township/projects/project2.jpg"
            alt="experience image 1"
            className="img-fluid w-full bg_img"
          />
          <div className="container">
            <div className="content absolute bottom-[80px] text-center mx-auto leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
              <h5 className="text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu">
                The Estate Residences
              </h5>
              <p className="text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]">
                Sector 63A, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <ul className="dots">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default TownshipExperience;
