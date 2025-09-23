"use client";
import { BASE_ADMIN } from "@/config";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import ProjectSection from "@/src/admin/components/ProjectTabs/ProjectsSection";
import TableContainer from "@/src/admin/components/table/TableContainer";
import { useApi } from "@/src/admin/hooks/useApi";
import { useCrud } from "@/src/admin/hooks/useCrud";
import { formatFormData } from "@/src/admin/utils/formatFormData";
import { useParams } from "next/navigation";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// --- Centralized Config ---
const staticSectionConfigs = {
  banner: {
    fields: [
      { type: "image", name: "mobile_file", label: "Desktop Banner" },
      { type: "image", name: "desktop_file", label: "Mobile Banner" },
      { type: "text", name: "alt_text", label: "Alt Tag" },
    ],
    table: { head: ["Desktop Banner","Mobile Banner", "Alt Tag"], header: ["desktop_file","mobile_file", "alt_text"] },
    endpoint: "project-banner",
    label: "Banner",
  },
  highlight: {
    fields: [
      { type: "text", name: "title", label: "Title" },
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: {
      head: ["Title", "Image", "Alt Tag"],
      header: ["title", "image", "alt"],
    },
    endpoint: "project-highlights",
    label: "Highlights",
  },
  gallery: {
    fields: [
      { type: "image", name: "image", label: "Image" },
      { type: "text", name: "alt", label: "Alt Tag" },
    ],
    table: { head: ["Image", "Alt Tag"], header: ["image", "alt"] },
    endpoint: "project-galleries",
    label: "Gallery",
  },
};

const ProjectDetails = () => {
  const { id, slug } = useParams();
  const api = useApi(BASE_ADMIN);

  const { tableData: amenitiesLogo } = useCrud(api, "amenities-logo");
  const { tableData: subTypologies } = useCrud(api, "sub-typologies");
  const { tableData: destinationId } = useCrud(api, "projects/project-location-destination-list");


  // map to dropdown options
  const amenitiesLogoOptions =
    amenitiesLogo?.map((item) => ({
      label: item.name, // check actual API response
      value: item.id,
    })) || []; // map to dropdown options
  const floorPlanOptions =
    subTypologies?.map((item) => ({
      label: item.name, // check actual API response
      value: item.id,
    })) || [];
  const destinationOptions =
    destinationId?.map((item) => ({
      label: item.name, // check actual API response
      value: item.id,
    })) || [];

  // Merge dynamic stuff into static configs
  const sectionConfigs = {
    ...staticSectionConfigs,
    amenities: {
      fields: [
        {
          type: "dropdown",
          name: "logo_id",
          label: "Amenities Logo",
          fetchOptions: amenitiesLogoOptions,
          // options: amenitiesLogoOptions,
        },
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
    "floor_plan": {
  fields: [
    {
      type: "dropdown",
      name: "type",
      label: "Type",
      options: [
        { label: "Floor Plan", value: "floorplan" },
        { label: "Master Plan", value: "masterplan" },
      ],
    },
    {
      type: "dropdown",
      name: "sub_typologie_id",
      label: "Sub Typology Id",
      options: floorPlanOptions,
      showIf: (formData) => formData.type === "floorplan",
    },
    { 
      type: "text", 
      name: "title", 
      label: "Title", 
    },
    { type: "image", name: "image", label: "Icon" },
    { type: "text", name: "alt", label: "Alt Tag" },
  ],
  table: {
    head: ["Type", "Title", "Image", "Alt Tag"],
    header: ["type", "title", "image", "alt"],
  },
  endpoint: "project-floorplan",
  label: "Floor Plan",
},
    overview: {
      fields: [
        { type: "text", name: "title", label: "Title" },
        { type: "image", name: "image", label: "Image" },
        { type: "text", name: "alt", label: "Alt Tag" },
      ],
      table: {
        head: ["Title", "Image", "Alt Tag"],
        header: ["title", "image", "alt"],
      },
      endpoint: "overview",
      label: "Overview",
    },

    location_advantage: {
      fields: [
        {
          type: "dropdown",
          name: "destination_id",
          label: "Destination",
          options: destinationOptions,
        },
        { type: "text", name: "title", label: "Title" },
        { type: "text", name: "distance_time", label: "Distance Time" },
        { type: "image", name: "image", label: "Image" },
        { type: "text", name: "alt", label: "Alt Tag" },
      ],
      table: {
        head: ["Title", "Image", "Alt Tag"],
        header: ["title", "image", "alt"],
      },
      endpoint: "project-location",
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
  const {
    tableData,
    pagination,
    currentPage,
    handlePageChange,
    fetchTableData,
  } = useCrud(
    api,
    isEditableSection ? `projects/${id}/${config.endpoint}` : null,
    config.table.header || []
  );

  const { editData, handleAddOrUpdate, handleDelete, handleEdit } = useCrud(
    api,
    isEditableSection ? `projects/${config.endpoint}` : null,
    config.table.header || [],
    true
  );

  const handleAddOrUpdateWithRefresh = async (formData) => {
    await handleAddOrUpdate(formData, true);
    fetchTableData(currentPage); // 👈 refresh first hook’s table
  };
  const handleDeleteWithRefresh = async (id) => {
    await handleDelete(id);
    fetchTableData(currentPage); // 👈 refresh
  };

  const normalizeApiResponse = (apiData, fields) => {
    let normalized = { ...apiData };

    const fieldNames = fields.map((f) => f.name);
    Object.keys(normalized).forEach((key) => {
      if (!fieldNames.includes(key)) delete normalized[key];
    });

    return normalized;
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
                const formattedData = formatFormData(formData, config.fields);
                let payload = { ...formattedData };

                if (!editData) {
                  payload.project_id = id;
                } else {
                  delete payload.project_id;
                }

                handleAddOrUpdateWithRefresh(payload);
              }}
              defaultValues={normalizeApiResponse(editData, config.fields)}
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
