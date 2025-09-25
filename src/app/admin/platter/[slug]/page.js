"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import { useApi } from "@/src/admin/hooks/useApi";
import { BASE_ADMIN } from "@/config";
import { useCrud } from "@/src/admin/hooks/useCrud";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import TableContainer from "@/src/admin/components/table/TableContainer";
import { formatFormData } from "@/src/admin/utils/formatFormData";

const Page = () => {
  const { slug } = useParams();
  const api = useApi(BASE_ADMIN);

  // Fetch dropdown data
  const { tableData: amenitiesLogo } = useCrud(api, "amenities-logo");
  const { tableData: platterCrud } = useCrud(api, "platter");

  // Find TOWNSHIP platter
  const townshipPlatter = useMemo(() => platterCrud?.find((item) => item.name.toLowerCase() === "township"), [platterCrud]);
  const townshipId = townshipPlatter?.id;

  // Section configurations
  const sectionConfigs = {
    amenities: {
      fields: [
        { type: "dropdown", name: "platter_id", label: "Platter", options: [] },
        { type: "dropdown", name: "amenities_logo_id", label: "Amenities Logo", options: [] },
        { type: "text", name: "title", label: "Title" },
        { type: "image", name: "desktop_file", label: "Desktop Image" },
        { type: "image", name: "mobile_file", label: "Mobile Image" },
        { type: "text", name: "alt_text", label: "Alt Tag" },
      ],
      table: { head: ["Title", "Image", "Alt Tag"], header: ["title", "desktop_file", "alt_text"] },
      endpoint: "platter-amenities",
      label: "Amenities",
    },
    location: {
      fields: [
        { type: "dropdown", name: "platter_id", label: "Platter", options: [] },
        { type: "text", name: "title", label: "Title" },
        { type: "text", name: "distance_time", label: "Distance Time" },
      ],
      table: { head: ["Title","Distance Time"], header: ["title","distance_time"] },
      endpoint: "platter-location",
      label: "Location",
    },
  };

  const config = sectionConfigs[slug] || {
    fields: [],
    table: { head: [], header: [] },
    endpoint: "",
    label: slug,
  };

  // Prepare dropdown options
  const floorPlanOptions = platterCrud?.map((item) => ({ label: item.name, value: item.id })) || [];
  const amenitiesLogoOptions = amenitiesLogo?.map((item) => ({ label: item.name, value: item.id })) || [];

  // Compute dynamicFields using useMemo (stable reference)
  const dynamicFields = useMemo(() => {
    if (!config.fields) return [];
    return config.fields.map((f) => {
      if (f.type === "dropdown" && f.name === "platter_id") return { ...f, options: floorPlanOptions };
      if (f.type === "dropdown" && f.name === "amenities_logo_id") return { ...f, options: amenitiesLogoOptions };
      return f;
    });
  }, [config.fields, floorPlanOptions, amenitiesLogoOptions]);



  

  // CRUD operations for table
  const {
    editData,
    handleAddOrUpdate,
    handleDelete,
    handleEdit,
  } = useCrud(api,config.endpoint,config.table.header || [],false);

// Determine table endpoint only when townshipId is available
const tableEndpoint = townshipId ? `${config.endpoint}/${townshipId}` : null;

// CRUD operations for table
const {
  tableData,
  pagination,
  currentPage,
  handlePageChange,
} = useCrud(
  api,
  tableEndpoint,          // only fetch if townshipId is available
  config.table.header || []               // false = don't auto-fetch if your hook supports manual mode
);
  // Normalize API response for default values
  const normalizeApiResponse = (apiData, fields) => {
    if (!apiData) return {};
    const normalized = {};
    fields.forEach((f) => {
      if (apiData[f.name] !== undefined) {
        if (f.type === "dropdown") {
          const selectedOption = f.options.find((opt) => opt.value === apiData[f.name]);
          normalized[f.name] = selectedOption || null;
        } else {
          normalized[f.name] = apiData[f.name];
        }
      }
    });
    return normalized;
  };

  // Handle form submission
  const handleFormSubmit = (formData) => {
    const formattedData = formatFormData(formData, dynamicFields);
    handleAddOrUpdate(formattedData);
  };

  return (
    <section key={slug}>
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-12">
          <DynamicForm
            title={editData ? `Edit ${config.label}` : `Add ${config.label}`}
            data={dynamicFields}
            onSubmit={handleFormSubmit}
            defaultValues={normalizeApiResponse(editData, dynamicFields)}
            col={12}
          />
        </div>

        <div className="col-span-12">
          <Card>
            <CardHeading>{config.label}</CardHeading>
           {townshipId && (
  <TableContainer
    head={config.table.head}
    data={tableData}
    onDelete={handleDelete}
    onEdit={handleEdit}
    pagination={pagination}
    currentPage={currentPage}
    handlePageChange={handlePageChange}
  />
)}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Page;
