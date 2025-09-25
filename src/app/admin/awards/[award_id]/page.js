"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useApi } from "@/src/admin/hooks/useApi";
import { BASE_ADMIN } from "@/config";
import { useCrud } from "@/src/admin/hooks/useCrud";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import TableContainer from "@/src/admin/components/table/TableContainer";
import { formatFormData } from "@/src/admin/utils/formatFormData";

const fields = [
  { type: "image", name: "file", label: "Image" },
  { type: "text", name: "alt_text", label: "Alt" },
];


const head = [ "Image", "Alt"];
const header = ["file","alt_text"]

// ⚡ Helper
const normalizeApiResponse = (apiData, fields) => {
  let normalized = { ...apiData };
  const fieldNames = fields.map((f) => f.name);
  Object.keys(normalized).forEach((key) => {
    if (!fieldNames.includes(key)) delete normalized[key];
  });
  return normalized;
};

export default function Page() {
  const { award_id } = useParams();
  const api = useApi(BASE_ADMIN);

  // we already know the fields upfront
  const [dynamicFields] = useState(fields);

  const {
    tableData,
    editData,
    handleAddOrUpdate,
    handleDelete,
    handleEdit,
    pagination,
    currentPage,
    handlePageChange,
  } = useCrud(api, `award/gallery`,header);

  

  return (
    <section>
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-12">
          <DynamicForm
            title={editData ? `Edit Award` : `Add Award`}
            data={dynamicFields}
            onSubmit={(formData) => {
              const formattedData = formatFormData(formData, dynamicFields);

              // ✅ Add award_id to the form data
              handleAddOrUpdate({ ...formattedData, award_id });
            }}
            defaultValues={normalizeApiResponse(editData, dynamicFields)}
            col={12}
          />

        </div>

        <div className="col-span-12">
          <Card>
            <CardHeading>Award</CardHeading>
            <TableContainer
              head={head}
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
  );
}
