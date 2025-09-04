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

const sectionConfigs = {
  platter: {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "short_description", label: "Short Description" },
    ],
    table: { head: ["Name","Short Description","Image", "Alt Tag"], header: ["name","short_description","image", "alt"] },
    endpoint: "platter",
    label: "Platter",
  },
  typologies: {
    fields: [
      { type: "text", name: "typologies", label: "Typologies" },
    ],
    table: { head: ["Typologies","Add Sub Typologies"], header: ["typologies"] },
    endpoint: "typologies",
    label: "Typologies",
  },
  "sub-typologies": {
    fields: [
      { type: "text", name: "sub_typologies", label: "Typologies" },
    ],
    table: { head: ["Typologies"], header: ["sub_typologies"] },
    endpoint: "sub-typologies",
    label: "Sub Typologies",
  },
  timeline: {
    fields: [
      { type: "text", name: "year", label: "Year" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "short_description", label: "Short Description" },
    ],
    table: { head: ["Year","Short Description","Image", "Alt Tag"], header: ["year","short_description","image", "alt"] },
    endpoint: "journey",
    label: "Timeline",
  },
  "amenities-logo": {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Name","Image"], header: ["name","image"] },
    endpoint: "amenities-logo",
    label: "Amenities Logo",
  },
  award: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "short_description", label: "Short Description" },
    ],
    table: { head: ["Title","Short Description","Image", "Alt Tag"], header: ["title","short_description","image", "alt"] },
    endpoint: "award",
    label: "Awards",
  },
  news: {
    fields: [
      { type: "image", name: "logo", label: "Logo" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "short_description", label: "Short Description" },
    ],
    table: { head: ["Short Description","Logo", "Alt Tag"], header: ["short_description","logo", "alt"] },
    endpoint: "news",
    label: "News",
  },
  blog: {
    fields: [
      { type: "image", name: "feature_image", label: "Desktop Image" },
      { type: "image", name: "mb_image", label: "Mobile Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "heading", label: "Heading" },
      { type: "text", name: "short_description", label: "Short Description" },
      { type: "text", name: "meta_title", label: "Meta Title" },
      { type: "text", name: "meta_keyword", label: "Meta Keywords" },
      { type: "text", name: "meta_description", label: "Meta Description" },
      { type: "richtext", name: "description", label: "Description" ,col: "md:col-span-12"},
    ],
    table: { head: ["Heading","Short Description","Image",], header: ["heading","short_description","feature_image",] },
    endpoint: "blog",
    label: "Blogs",
    col:12
  },
  testimonial: {
    fields: [
      { type: "text", name: "name", label: "Name" },
      { type: "text", name: "short_description", label: "Description" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: {
      head: ["Name", "Description"],
      header: ["name", "short_description"],
    },
    endpoint: "testimonials",
    label: "Testimonial",
  },
  pillar: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "text", name: "short_description", label: "Description" },
    ],
    table: { head: ["Title", "Description"], header: ["title", "short_description"] },
    endpoint: "pillar",
    label: "Pillars",
  },
  "our-team": {
    fields: [
      {
        type: "dropdown",
        name: "category_id",
        label: "Select Page",
        options: [],
        // required: true,
      },
      { type: "text", name: "name", label: "Name" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
      { type: "text", name: "designation", label: "Designation" },
      { type: "text", name: "short_description", label: "Description" },
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
      {
        type: "dropdown",
        name: "page_id",
        label: "Select Page",
        options: [],
        // required: true,
      },
      { type: "text", name: "meta_title", label: "Title" },
      { type: "text", name: "meta_keyword", label: "Keywords" },
      { type: "text", name: "meta_description", label: "Description" },
      { type: "textarea", name: "head_data", label: "Head Data" },
      { type: "textarea", name: "footer_data", label: "Footer Data" },
    ],
    table: {
      head: ["Heading", "Keywords", "Description", "Head Data", "Footer Data"],
      header: ["meta_title","meta_keyword","meta_description","head_data","footer_data",],
    },
    endpoint: "page-meta",
    label: "Meta Page",
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
  const { tableData: MetaFields } = slug === "our-team" ? useCrud(api, "team-category") : { tableData: [] };
      

  console.log(editData,"editData");

useEffect(() => {
  if (slug === "our-team") {
    const options = MetaFields?.map((item) => ({
      label: item.name,
      value: item.id,
    }));

    const updatedFields = config.fields.map((f) => {
      if (f.type === "dropdown" && f.name === "category_id") {
        return {
          ...f,
          options,
          // ✅ Preselect the correct page if editing
          defaultValue: editData?.category_id || "",
        };
      }
      return f;
    });

    setDynamicFields(updatedFields);
  } else {
    setDynamicFields(config.fields);
  }
}, [slug, MetaFields, editData]);


  return <>
    <section key={slug}>
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-12">
          <DynamicForm
            title={editData ? `Edit ${config.label}` : `Add ${config.label}`}
            data={dynamicFields}
            onSubmit={handleAddOrUpdate}
            defaultValues={editData}
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
