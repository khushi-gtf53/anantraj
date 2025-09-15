"use client";
import { BASE_ADMIN } from "@/config";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import ProjectSection from "@/src/admin/components/ProjectTabs/ProjectsSection";
import TableContainer from "@/src/admin/components/table/TableContainer";
import { useApi } from "@/src/admin/hooks/useApi";
import { useCrud } from "@/src/admin/hooks/useCrud";
import { useParams } from "next/navigation";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

    // --- Centralized Config ---
const staticSectionConfigs = {
  banner: {
    fields: [
      { type: "image", name: "image", label: "Banner" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Banner", "Alt Tag"], header: ["image", "alt"] },
    endpoint: "banner",
    label: "Banner",
  },
  highlight: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Title","Image","Alt Tag"], header: ["title","image","alt"] },
    endpoint: "highlight",
    label: "Highlights",
  },
  gallery: {
    fields: [
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Image", "Alt Tag"], header: ["image", "alt"] },
    endpoint: "galleries",
    label: "Gallery",
  },
};

const ProjectDetails = () => {
  const { id, slug } = useParams();
  const api = useApi(BASE_ADMIN);

      
  const { tableData: amenitiesLogo } = useCrud(api, "amenities-logo");
  const { tableData: subTypologies } = useCrud(api, "sub-typologies");

    // map to dropdown options
  const amenitiesLogoOptions =
    amenitiesLogo?.map((item) => ({
      label: item.name, // check actual API response
      value: item.id,
    })) || [];    // map to dropdown options
  const floorPlanOptions =
    subTypologies?.map((item) => ({
      label: item.sub_typologies, // check actual API response
      value: item.id,
    })) || [];

      // Merge dynamic stuff into static configs
  const sectionConfigs = {
    ...staticSectionConfigs,
    amenities: {
      fields: [
        { type: "dropdown", name: "logo_id", label: "Amenities Logo", options: amenitiesLogoOptions },
        { type: "text", name: "title", label: "Title" },
        { type: "text", name: "short_description", label: "Description" },
        { type: "image", name: "image", label: "Icon" },
        { type: "text", name: "alt", label: "Alt Tag" },
      ],
      table: {
        head: ["Title", "Description", "Icon", "Alt Tag"],
        header: ["title", "short_description", "image", "alt"],
      },
      endpoint: "project-amenities",
      label: "Amenities",
    },
    "floor-plan": {
      fields: [
        { type: "dropdown", name: "sub_typologie_id", label: "Amenities Logo", options: floorPlanOptions },
        { type: "text", name: "title", label: "Title" },
        { type: "image", name: "image", label: "Icon" },
        { type: "text", name: "alt", label: "Alt Tag" },
      ],
      table: {
        head: ["Title",  "image", "Alt Tag"],
        header: ["title",  "image", "alt"],
      },
      endpoint: "floor-plan",
      label: "Floor Plan",
    },
  overview: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Title","Image","Alt Tag"], header: ["title","image","alt"] },
    endpoint: "overview",
    label: "Overview",
  },
  
 
  
  location_advantage: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Title","Image","Alt Tag"], header: ["title","image","alt"] },
    endpoint: "location_advantage",
    label: "Location advantage",
  },
  };



  // Get config for current slug
  const config = sectionConfigs[slug] || {
    fields: [],
    table: { head: [], header: [] },
    endpoint: "",
    label: slug,
  };

  // Some slugs shouldn't render form/table
  const excludedSlugs = ["location-map", "overview"];
  const isEditableSection = config.endpoint && !excludedSlugs.includes(slug);


  // Hook for CRUD operations
  const { tableData, pagination,currentPage,handlePageChange,fetchTableData } =
    useCrud(api, isEditableSection ? `projects/${config.endpoint}` : null,config.table.header || [],);

    const {  editData, handleAddOrUpdate, handleDelete, handleEdit} =
    useCrud(api, isEditableSection ? `projects/${config.endpoint}` : null,config.table.header || [], true);

const handleAddOrUpdateWithRefresh = async (formData) => {
  await handleAddOrUpdate(formData);
  fetchTableData(currentPage); // 👈 refresh first hook’s table
};
const handleDeleteWithRefresh = async (id) => {
  await handleDelete(id);
  fetchTableData(currentPage); // 👈 refresh
};

  return (
    <section key={slug}>
      {/* Project Section always shown except for banner */}
      {slug !== "banner" && (
        <ProjectSection
          title={slug}
          project_id={id}
          project_slug={slug}
          endpoint="projects/section"
        />
      )}

      {/* Editable sections (form + table) */}
      {isEditableSection && (
        <div className="grid grid-cols-12 gap-[20px]">
          <div className="col-span-12">
            <DynamicForm
              title={editData ? `Edit ${config.label}` : `Add ${config.label}`}
              data={config.fields}
              onSubmit={(formData) => {
                // if (config.endpoint?.includes("project")) {
                  formData.project_id = id;
                // }
                handleAddOrUpdateWithRefresh(formData);
              }}
              defaultValues={editData}
              col={6}
            />
          </div>

          <div className="col-span-12">
            <Card>
              <CardHeading>{config.label}</CardHeading>
              <TableContainer
                head={config.table.head}
                data={tableData}
                 onDelete={handleDeleteWithRefresh}
                onEdit={handleEdit}
              pagination={pagination}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              />
            </Card>
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </section>
  );
};

export default ProjectDetails;
