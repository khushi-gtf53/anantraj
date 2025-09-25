"use client";
import { BASE_ADMIN } from "@/config";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import TableContainer from "@/src/admin/components/table/TableContainer";
import { useApi } from "@/src/admin/hooks/useApi";
import { useCrud } from "@/src/admin/hooks/useCrud";
import { formatFormData } from "@/src/admin/utils/formatFormData";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const fields = [
  { type: "text", name: "title", label: "Title" },
  { type: "file", name: "file", label: "File" },
  {
    type: "dropdown",
    name: "permissions",
    label: "Permissions",
    options: [
      { label: "List", value: "list" },
      { label: "Box", value: "box" },
      { label: "Model", value: "model" },
    ],
  },
];

const head = ["Title", "Permissions", "Investor"];
const header = ["title", "permissions", "file"];

export default function Page() {
  const { parent_id } = useParams();
  const router = useRouter();
  const api = useApi(BASE_ADMIN);
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
  } = useCrud(api, `investors`);

  // ---------------------------
  // Helpers
  // ---------------------------

  // normalize helper for DynamicForm
  const normalizeApiResponse = (apiData, fields) => {
    if (!apiData) return {};
    let normalized = { ...apiData };
    const fieldNames = fields.map((f) => f.name);
    Object.keys(normalized).forEach((key) => {
      if (!fieldNames.includes(key)) delete normalized[key];
    });
    return normalized;
  };

  // get all children of a parent_id recursively
  const getChildrenByParentId = (data, parent_id) => {
    let result = [];
    for (const item of data) {
      if (item.parent_id === String(parent_id)) {
        result.push(item);
        if (item.children?.length > 0) {
          result = result.concat(getChildrenByParentId(item.children, item.id));
        }
      } else if (item.children?.length > 0) {
        result = result.concat(getChildrenByParentId(item.children, parent_id));
      }
    }
    return result;
  };

  // format data for table
  const formatForTable = (data) => {
    return data.map(item => [
      item.title,
      item.permissions,
      item.id, // ID always at end
    ]);
  };

  // get breadcrumb path
  const getBreadcrumb = (data, parent_id) => {
    const path = [];
    const findParent = (items, id) => {
      for (const item of items) {
        if (item.id === Number(id)) {
          path.unshift(item);
          if (item.parent_id && item.parent_id !== "0") {
            findParent(data, item.parent_id);
          }
          return true;
        }
        if (item.children?.length > 0) {
          if (findParent(item.children, id)) return true;
        }
      }
      return false;
    };
    if (parent_id && parent_id !== "0") findParent(data, parent_id);
    return path;
  };

  // ---------------------------
  // Computed data
  // ---------------------------
  const childrenOfParent = getChildrenByParentId(tableData, parent_id);
  const filteredData = formatForTable(childrenOfParent);
  const breadcrumb = getBreadcrumb(tableData, parent_id);

  // ---------------------------
  // Render
  // ---------------------------
  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ marginBottom: "10px" }}>
        <span
          style={{ cursor: "pointer", color: "white", marginRight: "5px" }}
          onClick={() => router.push(`/admin/investor`)}
        >
          Investor
        </span>
        {breadcrumb.length > 0 && " > "}
        {breadcrumb.map((item, index) => (
          <span key={item.id}>
            <span
              style={{ cursor: "pointer", color: "white" }}
              onClick={() => router.push(`/admin/investor/${item.id}`)}
            >
              {item.title}
            </span>
            {index < breadcrumb.length - 1 && " > "}
          </span>
        ))}
      </div>

      {/* Dynamic Form */}
      <div style={{ marginBottom: "20px" }}>
        <DynamicForm
          title={editData ? "Edit Investor" : "Add Investor"}
          data={dynamicFields}
          onSubmit={(formData) => {
            const formattedData = formatFormData(formData, dynamicFields);
            handleAddOrUpdate({ ...formattedData, parent_id });
          }}
          defaultValues={normalizeApiResponse(editData, dynamicFields)}
          col={12}
        />
      </div>

      {/* Table */}
      <div>
        <Card>
          <CardHeading>Investors</CardHeading>
          <TableContainer
            head={head}
            data={filteredData}
            onDelete={handleDelete}
            onEdit={handleEdit}
            pagination={pagination}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            onRowClick={(row) => router.push(`/admin/investor/${row[2]}`)} // ID is at end
          />
        </Card>
      </div>
    </div>
  );
}
