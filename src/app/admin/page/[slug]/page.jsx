
"use client";
import React from "react";
import { useParams } from "next/navigation";
import { BASE_ADMIN } from "@/config";
import { useApi } from "@/src/admin/hooks/useApi";
import SectionForm from "@/src/admin/components/form/SectionForm";

// Page section configuration
export const pageSectionConfigs = {
  home: {
    hero: {
      type: "home_banner",
      fields: [
        { type: "image", name: "mobile_file", label: "Mobile File" },
        { type: "image", name: "desktop_file", label: "Desktop File" },
        // { type: "text", name: "alt_text", label: "Alt Tag" },
      ],
    },
    overview: {
      type: "home_page_overview",
      fields: [
        {
          type: "array",
          name: "other",
          label: "Overview",
          col:"md:col-span-12",
          multiple: false,
          fields: [
        { type: "text", name: "heading", label: "Heading" },
            { type: "text", name: "short_description", label: "Short Description" },
            { type: "text", name: "year", label: "Year" },
          ],
        },
      ],
    },
    counter: {
      type: "home_page_counter",
      fields: [
        { type: "image", name: "desktop_file", label: "Desktop Image" },
        { type: "image", name: "mobile_file", label: "Mobile Image" },
        {
          type: "array",
          name: "other",
          label: "Counter Items",
          col:"md:col-span-12",
          fields: [
            { type: "number", name: "number", label: "Number" },
            { type: "text", name: "header", label: "Header" },
            { type: "text", name: "icon", label: "Icon" },
          ],
        },
      ],
    },
  },
  about: {
    overview: {
      type: "about_us_overview",
      // endpoint: "/api/v1/home/hero",
      fields: [
        { type: "text", name: "title", label: "Heading" },
        { type: "text", name: "description", label: "Description" },
        {
          type: "array",
          name: "other",
          label: "Counter Items",
          multiple:false,
          fields: [
            { type: "text", name: "short_description", label: "Short Descriptoin" },
          ],
        },
      ],
    },
    vision_mision: {
      type: "vison_and_mission",
      // endpoint: "/api/v1/home/counter",
      fields: [
        { type: "image", name: "desktop_file", label: "Desktop Image" },
        { type: "image", name: "mobile_file", label: "Mobile Image" },
        {
          type: "array",
          name: "other",
          label: "Counter Items",
          col:"md:col-span-12",
          fields: [
            { type: "text", name: "heading", label: "Heading" },
            { type: "text", name: "description", label: "Descriptoin" },
          ],
        },
      ],
    },
  },
  contact: {
    contact_info: {
      type: "contact_info",
      // endpoint: "/api/v1/home/counter",
      fields: [
        {
          type: "array",
          name: "other",
          label: "Contact Info",
          col:"md:col-span-12",
          fields: [
            { type: "text", name: "title", label: "Heading" },
            { type: "text", name: "mail", label: "Mail" },
            { type: "text", name: "number", label: "Phone Number" },
          ],
        },
      ],
    },
  },
  csr: {
    csr_overview: {
      type: "csr_overview",
      // endpoint: "/api/v1/home/counter",
      fields: [
        { type: "text", name: "title", label: "Heading" },
        { type: "text", name: "description", label: "Description" },
      ],
    },
  },
};

const Homepage = () => {
  const { slug } = useParams();
  const pageSections = pageSectionConfigs[slug] || {};
  const api = useApi(BASE_ADMIN);

  return (
    <section>
      {Object.entries(pageSections).map(([sectionKey, config], index) => (
        <SectionForm
          key={index}
          api={api}
          sectionKey={sectionKey}
          config={config}
        />
      ))}
    </section>
  );
};


export default Homepage;
