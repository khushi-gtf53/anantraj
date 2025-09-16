"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import TownshipExperience from "@/src/website/components/township/experience/Experience";
import TownshipHero from "@/src/website/components/township/hero/Hero";
import TownshipOverview from "@/src/website/components/township/overview/Overview";
import TownshipProjects from "@/src/website/components/township/projects/Projects";
import TownshipAmenities from "@/src/website/components/township/amenities/Amenities";
import TownshipLocationmap from "@/src/website/components/township/location-map/LocationMap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "@/src/website/components/common/Footer";

const Township = () => {
  // Refs to the wrapper and content divs
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);



  useLayoutEffect(()=>{
    let smoother;

    (async()=>{
      // Dynamically import GSAP and plugins so it runs only on the client
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");

      // Register the plugins with GSAP
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      // Create the smoother for THIS page only
      smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,   
        content: contentRef.current,   
        smooth: 1,                     
        effects: true,                 
        normalizeScroll: true,         
        smoothTouch: 0.1 
      });

    })();

    return()=>{
      try{
        ScrollSmoother.get()?.kill();
      }catch{}
    }

  },[])

  return (
    <div id="smooth-wrapper" ref={wrapperRef} style={{ overflow: "hidden" }}>
      <div id="smooth-content" ref={contentRef}>
        <TownshipHero />
        <TownshipOverview />
         <TownshipExperience /> 
        <TownshipProjects />
        <TownshipAmenities />
       <TownshipLocationmap />
        <Footer showFooter={true} />
      </div>
    </div>
  );
};

export default Township;
