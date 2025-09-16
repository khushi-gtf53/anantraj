import ProjectAbout from "@/src/website/components/projects/ProjectAbout"
import ProjectsPage from "@/src/website/components/projects/ProjectsPage"

// ✅ SEO metadata for Projects page
export const metadata = {
  title: "Our Projects | Anant Raj",
  description:
    "Explore the wide range of projects delivered by Anant Raj, showcasing our expertise and commitment to excellence.",
  openGraph: {
    title: "Our Projects | Anant Raj",
    description:
      "Discover our diverse portfolio of projects across industries, built with innovation and quality.",
    url: "https://yourdomain.com/projects",
    images: [
      {
        url: "https://yourdomain.com/images/projects-og.jpg", // 🔄 replace with real preview image
        width: 1200,
        height: 630,
        alt: "Our Projects - Anant Raj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Anant Raj",
    description:
      "Take a look at the projects that define Anant Raj's dedication and expertise.",
    images: ["https://yourdomain.com/images/projects-og.jpg"], // 🔄 replace with real preview image
  },
  alternates: {
    canonical: "https://yourdomain.com/projects",
  },
}

const ProjectsPageContainer = () => {
  return (
    <>
      <ProjectAbout />
      <ProjectsPage />
    </>
  )
}

export default ProjectsPageContainer
