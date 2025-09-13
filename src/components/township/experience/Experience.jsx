import React, { useEffect } from 'react';
import CommonHeading from '../../common/CommonHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Experience = () => {
  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const expSections = document.querySelectorAll(".experience_sec");

  expSections.forEach((section) => {
    const img = section.querySelector(".animate_img");
    const textContent = section.querySelector(".content");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top -15%",
        end: "+=1500",
        scrub: 1,
        pin: true,
        pinSpacing: false,            
      },
    });

    // image expand
    tl.to(img, {
      width: "100vw",
      height: "100vh",
      ease: "power2.out",
      objectFit: "cover",
      duration: 3,
    });

    
    tl.to(
      textContent,
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      },
      "<"
    );

    // small pause before exit
    tl.to({}, { duration: 0.2});
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

  return (
    <section className="experience_sec w-full bg-[#FBF6F6]">
      <div className="wrapper">
        <CommonHeading>
          Experience Excellence In Our Premier Properties
        </CommonHeading>
      </div>
      <div className="slides pb-40">
        <div className="flex gap-4 justify-center items-center">
          <img src="assets/township/experience/image1.jpg" alt="" />
          <img src="assets/township/experience/image2.jpg" alt="" />
          <img
            src="assets/township/projects/project.webp"
            alt=""
            className="animate_img w-[400px] h-[550px] object-cover"
          />
          <img src="assets/township/experience/image4.jpg" alt="" />
          <img src="assets/township/experience/image5.jpg" alt="" />
        </div>
      </div>

      {/* Hidden text initially, will fade in after image animation completes */}
    <div className="container relative z-30">
  <div className="content absolute bottom-80 left-1/2 -translate-x-1/2 text-center leading-[26px] opacity-0 z-30">
    <h5 className="text-white text-[30px] uppercase tracking-[1px] font-sangbleu">
      The Estate Residences
    </h5>
    <p className="text-white/90 text-[16px] mt-[15px] uppercase tracking-[2px] font-sangbleu">
      Sector 63A, Gurugram, Haryana
    </p>
  </div>
</div>



      <div className="project_sec  relative">
        <img src="assets/township/projects/project2.jpg" alt="experience image 1" className="img-fluid w-full bg_img" />
        <div className="container">
          <div className="content absolute bottom-[80px] text-center leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
            <h5 className='text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu'>The Estate Residences</h5>
            <p className='text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]'>Sector 63A, Gurugram, Haryana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
