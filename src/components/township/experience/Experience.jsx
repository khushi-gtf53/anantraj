import React, { useEffect } from 'react';
import CommonHeading from '../../common/CommonHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Experience = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const expSection = document.querySelectorAll('.experience_sec');
    const nextSection = document.querySelector('.projects_section'); 

    // Initially hide the next section
    gsap.set(nextSection, { opacity: 0, pointerEvents: 'none' });

    expSection.forEach((section) => {
      const img = section.querySelector('.animate_img');
      const textContent = section.querySelector('.content');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top -10%',
          end: '+=1000',
          scrub: 1, 
          pin: true, 
          pinSpacing: true, 
          onEnter: () => {
            gsap.to(nextSection, {
              opacity: 0,
              pointerEvents: 'none',
              duration: 0.1,
            });
          },
          onLeave: () => {
            gsap.to(nextSection, {
              opacity: 1,
              pointerEvents: 'auto',
              duration: 0.5,
              pin : true,
              ease: 'power2.out',
            });
          },
          onEnterBack: () => {
            gsap.to(nextSection, {
              opacity: 0,
              pointerEvents: 'none',
              duration: 0.5,
              ease: 'power2.out',
            });
          },
        },
      });

      tl.to(img, {
        width: '100vw',
        height: '100vh',
        ease: 'power2.out',
        objectFit: 'cover',
        duration: 2, 
      });

      tl.to(
        textContent,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        },
        '+=1' 
      );

      tl.to({}, { duration: 1 }); 
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
      <div className="container">
        <div className="content absolute bottom-[80px] text-center leading-[26px] mx-auto left-[50%] translate-x-[-50%] opacity-0">
          <h5 className="text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu">
            The Estate Residences
          </h5>
          <p className="text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]">
            Sector 63A, Gurugram, Haryana
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;