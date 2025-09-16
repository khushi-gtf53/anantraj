import Aboutus from "@/src/components/home/Aboutus";
import Achievements from "@/src/components/home/Achievements";
import Blogs from "@/src/components/home/Blogs";
import DevelopmentExperience from "@/src/components/home/DevelopmentExperience";
import Hero from "@/src/components/home/Hero";
import LuxuryProperties from "@/src/components/home/LuxuryProperties";
import Media from "@/src/components/home/Media";
import Journey from "@/src/components/home/OurJourney";
import OurTeam from "@/src/components/home/OurTeam";

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
