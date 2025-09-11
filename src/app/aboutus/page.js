import AboutTestimonials from "@/src/components/about/AboutTestimonials"
import AboutusTeam from "@/src/components/about/AboutusTeam"
import Brands from "@/src/components/about/Brands"
import DiscoverContent from "@/src/components/about/DiscoverContent"
import HeroAboutus from "@/src/components/about/HeroAboutus"
import OurStory from "@/src/components/about/OurStory"
import VisionAndMission from "@/src/components/about/VisionAndMission"

export const metadata = {
  title: "About Us | Anant Raj",
  description:
    "Learn more about Anant Raj — our vision, mission, story, and the people who make it happen.",
  openGraph: {
    title: "About Us | Anant Raj",
    description:
      "Discover our story, values, mission, and the passionate team behind Anant Raj.",
    url: "https://yourdomain.com/about",
    images: [
      {
        url: "https://yourdomain.com/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Us - Anant Raj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Anant Raj",
    description:
      "Meet the team and explore the vision and mission of Anant Raj.",
    images: ["https://yourdomain.com/images/about-og.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/about",
  },
}

const AboutPage = () => {
  return (
    <>
      <HeroAboutus />
      <DiscoverContent />
      <VisionAndMission />
      <OurStory />
      <Brands />
      <AboutusTeam />
      <AboutTestimonials />
    </>
  )
}

export default AboutPage
