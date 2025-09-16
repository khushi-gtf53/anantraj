import React, { useEffect } from 'react';
import CommonHeading from '../../common/CommonHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

useEffect(() => {
    const expSections = document.querySelector(".experience_sec");
    const img = document.querySelector(".animate_img");
    const textContent = document.querySelector(".content_new");
    const projectSections = gsap.utils.toArray(".project_sec");

    gsap.defaults({ ease: "slow(0.5, 0.8, true)" });

   const sectionHeight = expSections.offsetHeight || window.innerHeight; 
  const endValue = `+=${sectionHeight}px`;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: expSections,
      start: "top top",
      end: endValue,
      scrub: 2, 
      pin: true,
      anticipatePin: 1,
      
    },
  });
    tl.to(img, {
      flex: "0 0 100vw",
      height: "100vh",
      duration: 1.5, 
      delay: 0.1,
      ease: "slow(0.5, 0.8, true)"
    });

    tl.to(
      textContent,
      {
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
      },
      "-=0.5"
    );

    const pins = projectSections.map((section, i) =>
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: 0.2,
        pinSpacing: false,
        enabled: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: [0, 1],
          duration: 0.5,
          ease: "power2.inOut",
        },
        id: `proj-pin-${i}`,
      })
    );

    projectSections.forEach((section, i) => {
      tl.to(
        section,
        {
          y: "-100vh",
          zIndex: 10 + i, 
          duration: 1.2, 
          delay: 0.4, 
        },
        ">"
      );

      tl.add(() => {
        pins[i].enable();
        ScrollTrigger.refresh();
      });

      tl.to({}, { duration: 0.5 }); 
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      pins.forEach((p) => p.kill());
    };
  }, []);


  return (
    <section className=" w-full bg-[#FBF6F6]">
      <div className="wrapper  !pb-0">
        <CommonHeading customClass={'text-center mx-[auto] !max-w-[60%]'}>
          Experience Excellence In Our Premier Properties
        </CommonHeading>
      </div>
      <div className=' experience_sec flex justify-center h-[100vh] flex-col'>
      <div className="slides">
        <div className="flex gap-4 justify-center items-center">
          <img src="assets/township/experience/image1.jpg" alt="" />
          <img src="assets/township/experience/image2.jpg" alt="" />
          <div className='relative animate_img  basis-[400px] h-[550px] '>
          <img
            src="assets/township/projects/project.webp"
            alt=""
            className="object-cover h-[100%] w-[100%]"
          />
                  <div className="content content_new absolute bottom-[60px] left-1/2 -translate-x-1/2 text-center leading-[26px] opacity-0 z-30">
                  <h5 className="text-white text-[30px] uppercase tracking-[1px] font-sangbleu">
                  The Estate Residences
                  </h5>
                  <p className="text-white/90 text-[16px] mt-[15px] uppercase tracking-[2px] font-sangbleu">
                  Sector 63A, Gurugram, Haryana
                  </p>
                  </div>
          </div>
          <img src="assets/township/experience/image4.jpg" alt="" />
          <img src="assets/township/experience/image5.jpg" alt="" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
