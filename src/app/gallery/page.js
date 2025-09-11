"use client";
import GalleryAbout from '@/src/components/gallery/GalleryAbout'
import Projects from '@/src/components/gallery/Projects'
import Image from 'next/image';
import React, { useState } from 'react'

const page = () => {
  const [activeTab, setActiveTab] = useState("allprojects");
  const tabs = [
    {
      key: "allprojects",
      label: "All Projects Images",
      images: [
        { src: "/assets/platter/residential/completed/1.webp", alt: "All Project Image 1" },
        { src: "/assets/platter/residential/completed/2.webp", alt: "All Project Image 2" },
        { src: "/assets/platter/residential/completed/3.webp", alt: "All Project Image 3" },
        { src: "/assets/platter/residential/completed/1.webp", alt: "All Project Image 1" },
        { src: "/assets/platter/residential/completed/2.webp", alt: "All Project Image 2" },
        { src: "/assets/platter/residential/completed/3.webp", alt: "All Project Image 3" },
        { src: "/assets/platter/residential/completed/3.webp", alt: "All Project Image 3" },
      ],
    },
    {
      key: "underconstruction",
      label: "All Under Construction Images",
      images: [
        { src: "/assets/platter/residential/completed/1.webp", alt: "Under Construction Image 1" },
        { src: "/assets/platter/residential/completed/2.webp", alt: "Under Construction Image 2" },
        { src: "/assets/platter/residential/completed/3.webp", alt: "Under Construction Image 3" },
      ],
    },
    {
      key: "award-event",
      label: "Event Images",
      images: [
        { src: "/assets/platter/residential/completed/1.webp", alt: "Event Image 1" },
        { src: "/assets/platter/residential/completed/2.webp", alt: "Event Image 2" },
        { src: "/assets/platter/residential/completed/3.webp", alt: "Event Image 3" },
      ],
    },
  ];

  return (
    <div className="bg-[#FBF6F6] relative w-full">
      <GalleryAbout activeTab={activeTab} setActiveTab={setActiveTab} />
      <Projects tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Image
        src="/assets/pattern-bg.png"
        alt="pattern background"
        width={1920}
        height={70}
        className="h-[70px] w-full object-cover"
        priority={false}
      />
    </div>
  );
};


export default page;