"use client";
import React from "react";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import { useCrud } from "@/src/admin/hooks/useCrud";
import { formatFormData } from "../../utils/formatFormData";
// import { formatFormData } from "@/src/admin/utils/formatFormData";

// normalize helper
const normalizeApiResponse = (apiData, fields) => {
  let normalized = { ...apiData };

  if (apiData.banner) {
    fields.forEach((field) => {
      if (["image", "video", "file"].includes(field.type)) {
        if (apiData.banner[field.name]) {
          normalized[field.name] = apiData.banner[field.name];
        }
      }
    });
  }

  // Remove keys not in fields
  const fieldNames = fields.map((f) => f.name);
  console.log(fieldNames,"fieldNames")
  Object.keys(normalized).forEach((key) => {
    if (!fieldNames.includes(key)) delete normalized[key];
  });

  return normalized;
};



// const SectionForm = ({ api, sectionKey, config }) => {
//   // Fetch data for this section
//   const { tableData } = useCrud(api, `other-sections/get-bytype/${config.type}`);

//   // Add/update handler
//   const { handleAddOrUpdate } = useCrud(api, "other-sections", [], false);

//   return (
//       <div className="col-span-12 mb-5">
//         <DynamicForm
//           title={`${sectionKey}`}
//           data={config.fields}
//           defaultValues={normalizeApiResponse(tableData[0] || {}, config.fields)}
//           onSubmit={(formData) => {
//             const formattedData = formatFormData(
//               formData,
//               config.fields,
//               config.type
//             );
//             handleAddOrUpdate(formattedData, true);
//           }}
//           col={12}  
//         />
//       </div>
//   );
// };

const SectionForm = ({ api, sectionKey, config }) => {
  const namespacedFields = config.fields.map(field => ({
    ...field,
    name: `${sectionKey}_${field.name}`,
  }));

  const { tableData } = useCrud(api, `other-sections/get-bytype/${config.type}`);
  const { handleAddOrUpdate } = useCrud(api, "other-sections", [], false);

  // Prefill with namespaced keys
  const prefixedDefaultValues = normalizeApiResponse(tableData[0] || {}, config.fields);
  const namespacedDefaultValues = Object.fromEntries(
    Object.entries(prefixedDefaultValues).map(([key, val]) => [`${sectionKey}_${key}`, val])
  );

  return (
    <div className="col-span-12 mb-5">
      <DynamicForm
        title={`${sectionKey}`}
        data={namespacedFields}
        defaultValues={namespacedDefaultValues}
        onSubmit={(formData) => {
          const formattedData = formatFormData(formData, namespacedFields, config.type);

          const cleanedData = Object.fromEntries(
            Object.entries(formattedData).map(([key, val]) => [
              key.replace(`${sectionKey}_`, ""),
              val
            ])
          );

          handleAddOrUpdate(cleanedData, true);
        }}
        col={12}
      />
    </div>
  );
};



export default SectionForm;
