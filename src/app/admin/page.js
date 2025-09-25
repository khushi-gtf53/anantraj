"use client"

import { RiPagesFill } from "react-icons/ri";
import { useState } from "react";
import ProjectCard from "@/src/admin/components/card/ProjectCard";
import TestimonialCard from "@/src/admin/components/card/TestimonialCard";
import SectionsCard from "@/src/admin/components/card/SectionsCard";
import ProjectList from "@/src/admin/components/card/ProjectList";
// import { useCrud } from "@/src/admin/hooks/useCrud";
// import { useApi } from "@/src/admin/hooks/useApi";
// import { BASE_ADMIN } from "@/config";

const pages=[
  {name:"Home",slug:"home"},
  {name:"About",slug:"about"},
  {name:"Contact",slug:"contact"},
  {name:"CSR",slug:"csr"},
  {name:"Media Center",slug:"media-center"},
  {name:"Career",slug:"career"},
  {name:"Awards",slug:"awards"}
]

const ProjectsPages=[
  {name:"Platter",slug:"platter"},
  {name:"Typologies",slug:"typologies"},
  {name:"Sub Typologies",slug:"sub-typologies"},
];
const PlatterSections=[
  {name:"Amenities",slug:"amenities"},
  {name:"Location",slug:"location"},
];
const CMSPages=[
  {name:"Meta",slug:"meta",},
  {name:"Timeline",slug:"timeline"},
  {name:"Amenities Logo",slug:"amenities-logo"},
  {name:"Awards",slug:"award"},
  {name:"Awards Gallery",slug:"awards-gallery"},
  {name:"News",slug:"news"},
  {name:"Blogs",slug:"blog"},
  {name:"Our Team",slug:"our-team"},
  {name:"Testimonial",slug:"testimonial"},
  {name:"Our Story",slug:"our-story"},
  {name:"Brand Pillars",slug:"pillar"},
  {name:"Csr List",slug:"csr-list"},
  {name:"Csr Gallery",slug:"csr-gallery"},
  {name:"Career Gallery",slug:"career-galleries"},
  {name:"Event Gallery",slug:"event-galleries"},
  {name:"Jobs",slug:"jobs"},
];
const Dashboard = () => {
  const [totalProject, setTotalProjects] = useState(0);
  
      // const api = useApi(BASE_ADMIN);
      // const { tableData : pages, } = useCrud(api, "page");
  return (
    <section className=" grid grid-cols-12 gap-6 body-detail">
      <div className="col-span-8">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-6"><ProjectCard data={totalProject}/></div>
          <div className="col-span-6"><TestimonialCard/></div>
        </div>
        <SectionsCard title="Pages" icon={RiPagesFill} data={pages} link="page"/>
        <SectionsCard title="Projects Sections" icon={RiPagesFill} data={ProjectsPages} link="cms"/>
        <SectionsCard title="Platter Sections" icon={RiPagesFill} data={PlatterSections} link="platter"/>
        <SectionsCard title="CMS Sections" icon={RiPagesFill} data={CMSPages} link="cms"/>
      </div>
      <div className="col-span-4">
        <ProjectList setTotalProjects={setTotalProjects}/>
      </div>
    </section>
  );
};

export default Dashboard;
