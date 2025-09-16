"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SetupGsapAnimations = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll("[data-gsap]");
    const scrollTriggers = [];

    console.log("Found [data-gsap] elements:", elements.length); // Debug log

    elements.forEach((element) => {
      const animationType = element.dataset.gsap || "fade";
      const delay = parseFloat(element.dataset.gsapDelay) || 0;
      const duration = parseFloat(element.dataset.gsapDuration) || 1;
      const start = "top 80%"; // Fixed start trigger
      const ease = element.dataset.gsapEase || "power1.out";

      let animationProps = {};
      switch (animationType) {
        case "fade":
          animationProps = {
            from: { opacity: 0 },
            to: { opacity: 1, duration, ease, delay },
          };
          break;
        case "fade-up":
          animationProps = {
            from: {  y: 50 },
            to: {  y: 0, duration, ease, delay },
          };
          break;
        case "fade-down":
          animationProps = {
            from: { opacity: 0, y: -50 },
            to: { opacity: 1, y: 0, duration, ease, delay },
          };
          break;
        case "zoom-in":
          animationProps = {
            from: { opacity: 0, scale: 0.8 },
            to: { opacity: 1, scale: 1, duration, ease, delay },
          };
          break;
        case "zoom-out":
          animationProps = {
            from: { scale: 1.3 },
            to: {  scale: 1, duration, ease, delay },
          };
          break;
        case "slide-right":
          animationProps = {
            from: { opacity: 0, x: -50 },
            to: { opacity: 1, x: 0, duration, ease, delay },
          };
          break;
        case "clip-polygon":
          animationProps = {
            from: {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            },
            to: {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration,
              ease,
              delay,
            },
          };
          break;
        default:
          animationProps = {
            from: { opacity: 0 },
            to: { opacity: 1, duration, ease, delay },
          };
      }

      console.log(`Animating element with type: ${animationType}`, element); // Debug log

      const trigger = ScrollTrigger.create({
        trigger: element,
        start,
        toggleActions: "play none none none",
        animation: gsap.fromTo(element, animationProps.from, animationProps.to),
      });

      scrollTriggers.push(trigger);
    });

    return () => {
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default SetupGsapAnimations;
