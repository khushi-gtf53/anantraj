"use client";
import React from "react";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import { useCrud } from "@/src/admin/hooks/useCrud";

// normalize helper
const normalizeApiResponse = (apiData, fields) => {
  let normalized = { ...apiData };

  if (apiData.banner) {
    if (apiData.banner.desktop_file)
      normalized.desktop_file = apiData.banner.desktop_file;
    if (apiData.banner.mobile_file)
      normalized.mobile_file = apiData.banner.mobile_file;
  }

  const fieldNames = fields.map((f) => f.name);
  Object.keys(normalized).forEach((key) => {
    if (!fieldNames.includes(key)) delete normalized[key];
  });

  return normalized;
};

const SectionForm = ({ api, sectionKey, config }) => {
  // Fetch data for this section
  const { tableData } = useCrud( api,`other-sections/get-bytype/${config.type}`);

  // Add/update handler
  const { handleAddOrUpdate } = useCrud(api, "other-sections", [], false);

  return (
    <Card>
      <CardHeading>{sectionKey}</CardHeading>
      <div className="col-span-12">
        <DynamicForm
          title={`Form - ${sectionKey}`}
          data={config.fields}
          defaultValues={normalizeApiResponse(tableData[0] || {}, config.fields)}
          onSubmit={(formData) => {
            const formattedData = {};
            Object.entries(formData).forEach(([key, value]) => {
              formattedData[key] = Array.isArray(value)
                ? JSON.stringify(value)
                : value;
            });
            formattedData.type = config.type;
            handleAddOrUpdate(formattedData, true);
          }}
          col={12}
        />
      </div>
    </Card>
  );
};

export default SectionForm;
