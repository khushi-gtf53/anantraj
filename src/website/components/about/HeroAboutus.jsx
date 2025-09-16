"use client";

import CommonHeroSec from "../common/CommonHeroSec";

const Obj = {
  title: "About Us",
  heading: "Our Group",
  subtitle: (
    <>
      Founded in 1969, Anant Raj Limited carries a lineage that predates the formal{" "}
      <span className="lg:block hidden"></span> birth of India’s real estate industry...
    </>
  ),
  imgUrl: "/assets/hero-aboutus.webp",
  linkTo: "discover",
  tabs: [
    { tabname: "our group", tablink: "group" },
    { tabname: "mission & vision", tablink: "missionvision" },
    { tabname: "our story", tablink: "story" },
    { tabname: "brand pillars", tablink: "brandpillars" },
    { tabname: "team", tablink: "team" },
    { tabname: "testimonials", tablink: "testimonials" },
  ],
};


const HeroAboutus = () => {
  return (
   <CommonHeroSec ObjData={Obj}/>
  );
};

export default HeroAboutus;
