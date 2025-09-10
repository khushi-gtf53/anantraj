"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonHeading from "../../common/CommonHeading";

gsap.registerPlugin(ScrollTrigger);

const location_advantages = [
  { name: ["HOTEL GRAND HYATT"], distance: "2.4 Kms", time: "5 mins" },
  { name: ["MARENGO ASIA HOSPITAL", "SHALOM PRESIDENCY SCHOOL"], distance: "3.5 Kms", time: "7 mins" },
  { name: ["RAPID METRO SEC 55-56"], distance: "3.6 Kms", time: "8 mins" },
  { name: ["SOUTH POINT MALL"], distance: "6.4 Kms", time: "10 mins" },
  { name: ["TRANSPORT IGI AIRPORT"], distance: "23 Kms", time: "30 mins" },
];

const TownshipLocationmap = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mainSection = document.querySelector('.township_location_advantage_section');
      const sections = gsap.utils.toArray(".flex-point");
      const pinTriggers = [];
  
      sections.forEach((sec, i) => {
        const texts = sec.querySelectorAll("p");
        const circle = sec.querySelector(".round");
        const targets = [...texts, circle].filter(Boolean);
        const nextSec = sections[i + 1];
      
        // initial state
        gsap.set(targets, { opacity: 0.1, willChange: "opacity, transform" });
        if (circle) gsap.set(circle, { scale: 0.96 });
      
        // FADE-IN (same as before, but ek saath targets par)
        if (targets.length) {
          gsap.to(targets, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
              invalidateOnRefresh: true,
              // markers: true,
            },
          });
        }
        // circle scale in
        if (circle) {
          gsap.to(circle, {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        }
      
        // ✅ FADE-OUT CURRENT as NEXT arrives (use .to, not .fromTo)
        if (nextSec && targets.length) {
          gsap.fromTo(
            targets,
            { opacity: 1 },
            {
              opacity: 0,
              ease: "none",
              immediateRender: false,   // ⬅️ critical
              scrollTrigger: {
                trigger: nextSec,
                start: "top 70%",
                end: "top 40%",
                scrub: true,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      
        // pinning (as-is)
        const pinST = ScrollTrigger.create({
          trigger: sec,
          start: "top 240",
          end: () => "+=" + (mainSection.offsetHeight),
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true,
        });

        pinTriggers.push(pinST);
      });

      ScrollTrigger.create({
        trigger: mainSection,
        start: "top top",
        end: "bottom 80%",         // jab mainSection ka bottom viewport ke 80% par aata hai
        onLeave: () => {           // scrolling DOWN past end
          pinTriggers.forEach(st => st.disable()); // unpin all
        },
        onEnterBack: () => {       // scrolling UP back into the section
          pinTriggers.forEach(st => st.enable());  // re-pin all
        },
        // markers: true,
      });
    });
  
    return () => ctx.revert();
  }, []);
  

  return (
    <div className="township_location_advantage_section relative bg-[#FBF6F6]">
      <img
        src="assets/township/location/map.webp"
        alt="Location map"
        className="img-fluid w-full"
      />

      <div className="container">
        <div className="advantages py-[100px]">
          <CommonHeading customClass="mx-auto lg:max-w-[700px] text-center">
            Strategic Location Advantages
          </CommonHeading>

          <div className="points pt-[100px]">
            {location_advantages.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div
                    className={`flex-point md:flex gap-[80px] ${index !== location_advantages.length - 1 ? "mb-[60px] md:mb-[100px]" : ""}`} // ${index !== 0 ? "mt-[100px]" : ""}
                    key={index}
                  >
                    <div className="col order-2">
                      <div className="round border h-[150px] md:h-[300px] md:w-[300px] w-[150px] rounded-full flex items-center justify-center flex-col bg-[#fbf6f6] mx-auto">
                        <h4 className="font-sangbleu text-[18px] md:text-[24px] uppercase">
                          {item.distance}
                        </h4>
                        <h4 className="font-sangbleu text-[18px] md:text-[24px] uppercase mt-2">
                          ({item.time})
                        </h4>
                      </div>
                    </div>

                    <div className="col flex flex-1 justify-center flex-col md:mt-0 mt-3">
                      {item.name?.map((nItem, nIndex) => (
                        <p
                          key={nIndex}
                          className="md:text-right text-center w-full text-[14px] md:text-[20px] font-[500] tracking-[1px]"
                        >
                          {nItem}
                        </p>
                      ))}
                    </div>

                    

                    <div className="col order-3 flex-1" />
                  </div>
                );
              } else {
                return (
                  <div
                    className={`flex-point md:flex gap-[80px]  ${index !== location_advantages.length - 1 ? "mb-[60px] md:mb-[100px]" : ""}`} // ${index !== 0 ? "mt-[100px]" : ""}
                    key={index}
                  >
                    <div className="col flex-1" />

                    <div className="col">
                      <div className="round border h-[150px] md:h-[300px] md:w-[300px] w-[150px] rounded-full flex items-center justify-center flex-col bg-[#fbf6f6] mx-auto">
                        <h4 className="font-sangbleu text-[18px] md:text-[24px] uppercase">
                          {item.distance}
                        </h4>
                        <h4 className="font-sangbleu text-[18px] md:text-[24px] uppercase mt-2">
                          ({item.time})
                        </h4>
                      </div>
                    </div>

                    <div className="col flex flex-1 justify-center flex-col md:mt-0 mt-3">
                      {item.name?.map((nItem, nIndex) => (
                        <p
                          key={nIndex}
                          className={`text-center md:text-left w-full text-[14px] md:text-[20px] font-[500] tracking-[1px] ${nIndex !== 0 ? "mt-4" : ""}`}
                        >
                          {nItem}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TownshipLocationmap;
