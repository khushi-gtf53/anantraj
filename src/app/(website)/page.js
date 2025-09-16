import Aboutus from "@/src/website/components/home/Aboutus";
import Achievements from "@/src/website/components/home/Achievements";
import Blogs from "@/src/website/components/home/Blogs";
import DevelopmentExperience from "@/src/website/components/home/DevelopmentExperience";
import Hero from "@/src/website/components/home/Hero";
import LuxuryProperties from "@/src/website/components/home/LuxuryProperties";
import Media from "@/src/website/components/home/Media";
import Journey from "@/src/website/components/home/OurJourney";
import OurTeam from "@/src/website/components/home/OurTeam";

export default function Home() {
  return (
   <>
    <Hero/>
    <Aboutus/>
    <LuxuryProperties/>
    <OurTeam/>
    <DevelopmentExperience/>
    <Journey/>
    <Achievements/>
    <Media/>
    <Blogs/>
   </>
  );
}
