"use client";       
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { useParams } from "next/navigation";
import { useApi } from "@/src/admin/hooks/useApi";
import { BASE_ADMIN } from "@/config";
import { useCrud } from "@/src/admin/hooks/useCrud";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import TableContainer from "@/src/admin/components/table/TableContainer";
import { formatFormData } from "@/src/admin/utils/formatFormData";

const sectionConfigs = {
  platter: {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "short_description", label: "Short Description" },
      {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Name","Short Description","Image", "Alt Tag"], header: ["name","short_description","image", "alt"] },
    endpoint: "platter",
    label: "Platter",
  },
  typologies: {
    fields: [
      { type: "text", name: "name", label: "Typologies" },
        {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Typologies","Add Sub Typologies"], header: ["name"] },
    endpoint: "typologies",
    label: "Typologies",
  },
  "sub-typologies": {
    fields: [
      { type: "text", name: "name", label: "Sub Typologies" },
        {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Typologies"], header: ["name"] },
    endpoint: "sub-typologies",
    label: "Sub Typologies",
  },
  timeline: {
    fields: [
      { type: "text", name: "year", label: "Year" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "short_description", label: "Short Description" },
       {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Year","Short Description","Image", "Alt Tag"], header: ["year","short_description","image", "alt"] },
    endpoint: "timeline",
    label: "Timeline",
  },
  "amenities-logo": {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "image", name: "logo", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
       {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Name","Short Description","Image"], header: ["name","alt","logoUrl"] },
    endpoint: "amenities-logo",
    label: "Amenities Logo",
  },
  award: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "image", name: "file", label: "Image" },
      { type: "text", name: "alt_txt", label: "Alt Tag" },
      { type: "text", name: "year", label: "Year" },
      { type: "text", name: "description", label: "Short Description" },
      {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Title","Short Description","Year","Image", "Alt Tag"], header: ["title","description","year","file", "alt_txt"] },
    endpoint: "award",
    label: "Awards",
  },
  news: {
    fields: [
      { type: "image", name: "logo", label: "Logo" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "short_description", label: "Short Description" },
      {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: { head: ["Short Description","Logo","Image" ,"Alt Tag"], header: ["short_description","logo","image", "alt"] },
    endpoint: "news",
    label: "News",
  },
  blog: {
  fields: [
    { type: "text", name: "title", label: "Title" },
    { type: "text", name: "short_description", label: "Short Description" },
    { type: "richtext", name: "long_description", label: "Long Description", col: "md:col-span-12" },
    { type: "image", name: "file", label: "Feature Image" },
    { type: "text", name: "meta_title", label: "Meta Title" },
    { type: "text", name: "meta_keywords", label: "Meta Keywords" },
    { type: "text", name: "meta_description", label: "Meta Description" },
    { type: "text", name: "seo_tags", label: "SEO Tags" },
    {
      type: "dropdown",
      name: "status", 
      label: "Status",
      options: [
        { label: "Active", value: "1" },
        { label: "Inactive", value: "0" },
      ],
      defaultValue: "1",
    },
  ],
  table: {
    head: ["Title", "Short Description", "Image"],
    header: ["title", "short_description", "image"],
  },
  endpoint: "blog",
  label: "Blogs",
  col: 12,
},

  
  testimonial: {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "text", name: "short_description", label: "Description" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      {
        type: "dropdown",
        name: "status",
        label: "Status",
        options: [
        { label: "Active", value: "1" },
        { label: "Inactive", value: "0" },
        ],
        defaultValue:"1"
      },
    ],
    table: {
      head: ["Name", "Description"],
      header: ["name", "short_description"],
    },
    endpoint: "testimonial",
    label: "Testimonial",
  },
  pillar: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "text", name: "short_description", label: "Description" },
    ],
    table: { head: ["Title", "Description"], header: ["title", "short_description"] },
    endpoint: "brandpillar",
    label: "Pillars",
  },
  "our-team": {
    fields: [
      {
        type: "dropdown",
        name: "is_team_board",
        label: "Select Page",
        options: [],
        // required: true,
      },
      { type: "text", name: "name", label: "Name" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "designation", label: "Designation" },
      { type: "text", name: "short_description", label: "Description" },
      {
      type: "dropdown",
      name: "status",
      label: "Active Status",
      options: [
        { label: "Active", value: 1 },
        { label: "Inactive", value: 0 },
      ],
      defaultValue: 1,
    },
    ],
    table: {
      head: ["Name", "Image", "Alt Tag", "Designation"],
      header: ["name","image","alt","designation"],
    },
    endpoint: "team",
    label: "Our Team",
  },
  meta: {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "image", name: "file", label: "Image" },
      {
        type: "dropdown",
        name: "status",
        label: "Status",
        options: [
        { label: "Active", value: "1" },
        { label: "Inactive", value: "0" },
        ],
        defaultValue:"1"
      },
      

      { type: "text", name: "meta_title", label: "Title" },
      { type: "text", name: "meta_keywords", label: "Keywords" },
      { type: "text", name: "meta_description", label: "Description" },
      { type: "textarea", name: "seo_tags", label: "Seo tag" },
    ],
    table: {
      head: ["Name","Image","Title", "Keywords", "Description"],
      header: ["name","image","meta_title","meta_keywords","meta_description"],
    },
    endpoint: "page",
    label: "Meta Page",
  },
  "csr-list": {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "text", name: "description", label: "Description" },
      { type: "image", name: "file", label: "Image" },
      { type: "text", name: "alt_txt", label: "Alt" }

    ],
    table: { head: ["Title", "Description","Image"], header: ["title", "description","file"] },
    endpoint: "csr-list",
    label: "Csr List",
  },
  "csr-gallery": {
    fields: [
      { type: "text", name: "year", label: "Year" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt" }

    ],
    table: { head: ["Year", "Image","Alt"], header: ["year", "image","alt"] },
    endpoint: "csr-galleries",
    label: "Csr Gallery",
  },
};

const CmsSections = () => {

   const { slug } =  useParams();
  
      const api = useApi(BASE_ADMIN);
        const [dynamicFields, setDynamicFields] = useState([]);

  // Get config for current slug
  const config = sectionConfigs[slug] || {
    fields: [],
    table: { head: [], header: [] },
    endpoint: "",
    label: slug,
  };


  
    const { tableData, editData, handleAddOrUpdate, handleDelete, handleEdit,pagination,currentPage,handlePageChange } =
      useCrud(api, config.endpoint ,config.table.header || [],);
      
  
      // const {tableData : MetaFields}=useCrud(api,"distinct-pages");
        // 👇 Only call distinct-pages API when slug === "meta"
  const { tableData: MetaFields } = slug === "our-team" ? useCrud(api, "team/categories") : { tableData: [] };
      


useEffect(() => {
  if (slug === "our-team") {
  const options =
      MetaFields?.[0]?.rows?.map((item) => ({
        label: item.title,
        value: item.id,
      })) || [];

    const updatedFields = config.fields.map((f) => {
      if (f.type === "dropdown" && f.name === "is_team_board") {
        return {
          ...f,
          options,
          // ✅ Preselect the correct page if editing
          defaultValue: editData?.is_team_board || "",
        };
      }
      return f;
    });

    setDynamicFields(updatedFields);
  } else {
    setDynamicFields(config.fields);
  }
}, [slug, MetaFields, editData]);


// normalize helper
const normalizeApiResponse = (apiData, fields) => {
  let normalized = { ...apiData };

  const fieldNames = fields.map((f) => f.name);
  Object.keys(normalized).forEach((key) => {
    if (!fieldNames.includes(key)) delete normalized[key];
  });

  return normalized;
};


  return <>
    <section key={slug}>
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-12">
          <DynamicForm
            title={editData ? `Edit ${config.label}` : `Add ${config.label}`}
            data={dynamicFields}
          onSubmit={(formData) => {
  const formattedData = formatFormData(formData, dynamicFields);
  handleAddOrUpdate(formattedData);
}}
            defaultValues={normalizeApiResponse(editData, dynamicFields)}
            col={12}
          />
        </div>
        <div className="col-span-12">
          <Card>
            <CardHeading>{config.label}</CardHeading>
            <TableContainer
              head={config.table.head}
              data={tableData}
              onDelete={handleDelete}
              onEdit={handleEdit}
              pagination={pagination}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </Card>
        </div>
      </div>
    </section>
  </>;
};

export default CmsSections;
