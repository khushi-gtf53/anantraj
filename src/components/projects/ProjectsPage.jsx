"use client";

import { useState } from "react";
import "./styles.css"
import CommonHeading from "../common/CommonHeading";
import ProjectCard from "./ProjectCard";

const categories = [
  {
    category: "Residential",
    bigImage: "/assets/projects/1.webp",
    title: "Explore All Residential Projects",
    description:
      "Anant Raj Limited specializes in high-end apartments and luxury residences, offering meticulously designed homes that blend elegance with functionality.",

  },
  {
    category: "Commercial",
    bigImage: "/assets/projects/2.webp",
    title: "Explore All Commercial Projects",
    description:
      "Premium office spaces and commercial hubs designed for businesses to thrive.",
  },
  {
    category: "Hospitality",
    bigImage: "/assets/projects/3.webp",
    title: "Explore All Hospitality Projects",
    description:
      "Luxury hotels and resorts with a blend of comfort and elegance.",
  },
  {
    category: "Data Centers",
    bigImage: "/assets/projects/4.webp",
    title: "Explore All Data Center Projects",
    description:
      "High-tech data centers with world-class infrastructure and reliability.",
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState(categories[0]?.title || null);
  const expendCategory = (catTitle) => {
    setActive(catTitle === active ? null : catTitle);
  };

  return (
    <section className="project-cat">
      <CommonHeading>
        Creating Landmark Spaces that Inspire Living, Working, and Beyond.
      </CommonHeading>

      <div className="cat_carousel_wrapper pt-8">
        <div className="flex flex-wrap gap-0 text-current justify-between">
          {categories &&
            categories.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => expendCategory(item.title)}
                  className={`${active === item.title ? "active" : "no-active"
                    } cat_carousel_item 2xl:h-[650px] lg:h-[500px] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out`}
                >
                  <ProjectCard item={item} active={active} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}