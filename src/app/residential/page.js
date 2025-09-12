"use client";

import { useState } from "react";
import PlatterAbout from "@/src/components/platter/residential/PlatterAbout";
import PlatterProjects from "@/src/components/platter/residential/PlatterProjects";

const Page = () => {
  const [activeTab, setActiveTab] = useState("newlaunch"); 

  const projectTabs = [
    {
      key: "newlaunch",
      label: "All New Launch Projects",
      tablink: "newlaunch", 
      projects: [
        {
          name: "Estate Apartments",
          location: "Sector 63A, Gurugram",
          typology: "4 BHK Luxury Apartments",
          status: "New Launch",
          link: "estate-residences",
          image: "/assets/platter/residential/newlaunch/8.webp",
        },
      ],
    },
    {
      key: "underconstruction",
      label: "Under Construction",
      tablink: "underconstruction",
      projects: [
        {
          name: "The Estate Residencies",
          location: "Sector 63A, Gurugram",
          typology: "4 BHK Luxury Apartments",
          status: "Under Construction",
          link: "estate-residences",
          image: "/assets/platter/residential/under_construction/1.webp",
        },
      ],
    },
    {
      key: "completed",
      label: "Completed",
      tablink: "completed",
      projects: [
        {
          name: "Ashok Estate - Tower A",
          location: "Sector 63A, Gurugram",
          typology: "4 BHK Luxury Apartments",
          status: "Completed",
          link: "estate-residences",
          image: "/assets/platter/residential/completed/1.webp",
        },
        {
          name: "Ashok Estate - Tower B",
          location: "Sector 63A, Gurugram",
          typology: "4 BHK Luxury Apartments",
          status: "Completed",
          link: "estate-residences",
          image: "/assets/platter/residential/completed/2.webp",
        },
        {
          name: "Ashok Estate - Tower C",
          location: "Sector 63A, Gurugram",
          typology: "4 BHK Luxury Apartments",
          status: "Completed",
          link: "estate-residences",
          image: "/assets/platter/residential/completed/3.webp",
        },
      ],
    },
  ];

  return (
    <>
      <PlatterAbout tabs={projectTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <PlatterProjects tabs={projectTabs} activeTab={activeTab} />
    </>
  );
};

export default Page;