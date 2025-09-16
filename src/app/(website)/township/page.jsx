import React from "react";
import TownshipExperience from "@/src/website/components/township/experience/Experience";
import TownshipHero from "@/src/website/components/township/hero/Hero";
import TownshipOverview from "@/src/website/components/township/overview/Overview";
import TownshipProjects from "@/src/website/components/township/projects/Projects";
import TownshipAmenities from "@/src/website/components/township/amenities/Amenities";
import TownshipLocationmap from "@/src/website/components/township/location-map/LocationMap";

const Township = ()=>{
  return(
    <>
      <TownshipHero />
      <TownshipOverview />
      <TownshipExperience />
      <TownshipProjects />
      <TownshipAmenities />
      <TownshipLocationmap />
    </>
  )
}

export default Township;