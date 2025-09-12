
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import { BASE_ADMIN } from "@/config";
import { useApi } from "@/src/admin/hooks/useApi";
import { useCrud } from "@/src/admin/hooks/useCrud";
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
    // awards: {
    //   type: "home_page_awards",
    //   fields: [
    //     {
    //       type: "array",
    //       name: "other",
    //       label: "Awards",
    //       col:"md:col-span-12",
    //       fields: [
    //         { type: "number", name: "number", label: "Number" },
    //         { type: "text", name: "header", label: "Header" },
    //         { type: "text", name: "icon", label: "Icon" },
    //       ],
    //     },
    //   ],
    // },
  },
  about: {
    hero: {
      type: "home_page_hero",
      // endpoint: "/api/v1/home/hero",
      fields: [
        { type: "text", name: "heading", label: "Heading" },
        { type: "textarea", name: "description", label: "Description" },
      ],
    },
    news: {
      type: "home_page_counter",
      // endpoint: "/api/v1/home/counter",
      fields: [
        { type: "image", name: "desktop_file", label: "Desktop Image" },
        { type: "image", name: "mobile_file", label: "Mobile Image" },
        {
          type: "array",
          name: "other",
          label: "Counter Items",
          fields: [
            { type: "text", name: "heading", label: "Heading" },
            { type: "text", name: "description", label: "Descriptoin" },
            { type: "text", name: "icon", label: "Icon" },
          ],
        },
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
