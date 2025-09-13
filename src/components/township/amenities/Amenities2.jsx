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

      // Pin the top section
      const heading = document.querySelector(".topsec");
      
      if (heading) {
        ScrollTrigger.create({
          trigger: ".township_amenities_section",
          start: "top top",
          // end: "+=1000",
          pin: ".township_amenities_section" ,
          pinSpacing: false,
          markers:true
        });
      }

      // Wait for DOM to be ready
      const sections = gsap.utils.toArray(".single_am");
      if (sections.length === 0) return;

     
      sections.forEach((sec, i) => {
        const duration = sec.offsetHeight / 500;
        const img = sec.querySelector("img");
        const tl = gsap.timeline({
          scrollTrigger:{
            pin:true,
            end:'+=1000'
          }
        });
        tl.to(sec, {
          y: -300,
          opacity: 1,
          ease: "power2.inOut",
        }, i * duration) 

    
      });

      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, []);

  return (
    <div className="township_amenities_section relative py-[100px] bg-[#FBF6F6]">
      <div className="container relative max-h-[100vh]">
        <div className="topsec mb-24">
          <CommonHeading customClass="mx-auto lg:max-w-[600px] text-center">
            Stunning Luxury Prime Residences, Designed For Life
          </CommonHeading>
          <ul className="flex  gap-4 points justify-center items-center mt-[50px] mb-[100px]">
            {am_points.map((item, index) => (
              <li key={index} className="flex gap-2 tracking-[1px] items-center">
                {item.headng}
                {index !== am_points.length - 1 && <span className="divider"> | </span>}
              </li>
            ))}
          </ul>
                  
        {am_points.map((item, index) => (  <h4 
                className={`title ${'title-'+ index} ${index==0?'opacity-100':'opacity-0'} absolute font-sangbleu text-[40px] top-[54%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[10]`}
                ref={(el) => (titlesRef.current[index] = el)}
              >
                {item.headng}
              </h4>))
}

        </div>
        
        <div className="am_content  overflow-hidden" ref={containerRef}>
            
          {am_points.map((item, index) => (
            <div
              className="single_am my-20 max-w-[50%] mx-auto relative"
              key={index}
            >
           
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