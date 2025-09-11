"use client";

import { useState, useEffect, useRef } from "react";
import { IoMdVolumeHigh } from "react-icons/io";
import { FaVolumeMute } from "react-icons/fa";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  // Detect mobile on client
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Sync mute state with video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => setIsMuted((prev) => !prev);

  const videoSrc = isMobile
    ? "https://img.websitedesigningcompany.co.in/public/anant-raj/vd02.mp4"
    : "https://img.websitedesigningcompany.co.in/public/anant-raj/vdo.mp4";

  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        playsInline
        muted
        autoPlay
        loop
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/20" />


      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-5 right-5 z-20 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <FaVolumeMute size={22} /> : <IoMdVolumeHigh size={22} />}
      </button>
    </section>
  );
};

export default Hero;
