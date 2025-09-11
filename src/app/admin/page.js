"use client"

import { RiPagesFill } from "react-icons/ri";
import { useState } from "react";
import ProjectCard from "@/src/admin/components/card/ProjectCard";
import TestimonialCard from "@/src/admin/components/card/TestimonialCard";
import SectionsCard from "@/src/admin/components/card/SectionsCard";
import ProjectList from "@/src/admin/components/card/ProjectList";
import { useCrud } from "@/src/admin/hooks/useCrud";
import { useApi } from "@/src/admin/hooks/useApi";
import { BASE_ADMIN } from "@/config";

const ProjectsPages=[
  {name:"Platter",slug:"platter"},
  {name:"Typologies",slug:"typologies"},
  {name:"Sub Typologies",slug:"sub-typologies"},
];
const CMSPages=[
  {name:"Timeline",slug:"timeline"},
  {name:"Amenities Logo",slug:"amenities-logo"},
  {name:"Awards",slug:"award"},
  {name:"News",slug:"news"},
  {name:"Blogs",slug:"blog"},
  {name:"Our Team",slug:"our-team"},
  {name:"Testimonial",slug:"testimonial"},
  {name:"Brand Pillars",slug:"pillar"},
  {name:"Meta",slug:"meta",},
];
const Dashboard = () => {
  const [totalProject, setTotalProjects] = useState(0);
  
      const api = useApi(BASE_ADMIN);
      const { tableData : pages, } = useCrud(api, "page");
  return (
    <section className=" grid grid-cols-12 gap-6 body-detail">
      <div className="col-span-8">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-6"><ProjectCard data={totalProject}/></div>
          <div className="col-span-6"><TestimonialCard/></div>
        </div>
        <SectionsCard title="Pages" icon={RiPagesFill} data={pages}/>
        <SectionsCard title="Projects Sections" icon={RiPagesFill} data={ProjectsPages} cms={true}/>
        <SectionsCard title="CMS Sections" icon={RiPagesFill} data={CMSPages} cms={true}/>
      </div>
      <div className="col-span-4">
        <ProjectList setTotalProjects={setTotalProjects}/>
      </div>
    </section>
  );
};

export default Dashboard;
