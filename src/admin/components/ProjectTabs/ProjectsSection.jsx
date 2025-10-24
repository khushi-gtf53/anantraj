"use client";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { BASE_ADMIN } from "@/config";
import { useApi } from "../../hooks/useApi";
import { useCrud } from "../../hooks/useCrud";
import DynamicForm from "../form/DynamicForm";
import { formatFormData } from "../../utils/formatFormData";

  const fieldConfigs = {
  "highlight": [
    { type: "text", name: "title", label: "Title" },
  ],
  gallery: [
    { type: "text", name: "heading", label: "Heading" },
    { type: "text", name: "sub_heading", label: "Description" },
  ],
  amenities: [
    { type: "text", name: "title", label: "Title" },
  ],
  "location-map": [
    { type: "text", name: "heading", label: "Heading" },
    { type: "text", name: "sub_heading", label: "Description" },
    { type: "text", name: "description", label: "Location Map" },
  ],
  overview: [
    { type: "text", name: "title", label: "Title" },
    { type: "text", name: "description", label: "Description" },
    { type: "array", name: "other", label: "Other" ,col:"md:col-span-12",
          fields: [
            { type: "text", name: "heading", label: "Heading" },
            { type: "text", name: "number", label: "Number" },
            { type: "text", name: "icon", label: "Icon" },
          ],},
  ],
  "floor_plan": [
    { type: "text", name: "title", label: "Title" },
  ]
};


const ProjectSection = ({endpoint,project_id,project_slug,title}) => {
  const api = useApi(BASE_ADMIN);
  const {handleAddOrUpdate} = useCrud(api, endpoint,[], false);
  const {tableData:amenitiesHeading} = useCrud(api,`projects/section/${project_slug}`);

// pick config
const fieldConfig = fieldConfigs[project_slug] || fieldConfigs.gallery;

 // Wrapper for form submit → include project_id & section_type
//   const handleSubmit = (formData) => {

//     const payload = {
//       ...formData,
//       type: project_slug, // slug goes here
//     };
//     handleAddOrUpdate(payload);
//   };
// console.log(amenitiesHeading,"amenitiesHeading")

// normalize helper
const normalizeApiResponse = (apiData, fields) => {
  let normalized = { ...apiData };

  const fieldNames = fields.map((f) => f.name);
  Object.keys(normalized).forEach((key) => {
    if (!fieldNames.includes(key)) delete normalized[key];
  });

  return normalized;
};


  return (
    <section className="mb-[20px]">
          <DynamicForm
            key={project_slug}
            title={title}
            data={fieldConfig}
                      onSubmit={(formData) => {
                        const formattedData = formatFormData(
                          formData,
                          fieldConfig,
                          project_slug
                        );
                        handleAddOrUpdate(formattedData, true);
                      }}
            // onSubmit={handleSubmit}
            defaultValues={normalizeApiResponse(amenitiesHeading[0], fieldConfig)}
            col={12}
          />
    </section>
  );
};


export default ProjectSection;
