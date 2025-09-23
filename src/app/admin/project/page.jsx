"use client";

import { useState, useEffect } from "react";
import { BASE_ADMIN } from "@/config";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import { useApi } from "@/src/admin/hooks/useApi";
import { useCrud } from "@/src/admin/hooks/useCrud";
import { useParams } from "next/navigation";

const Project = () => {
  const { id } = useParams();
  const api = useApi(BASE_ADMIN);
  const [mounted, setMounted] = useState(false);

  // ✅ All hooks at top level
  const platterCrud = useCrud(api, "platter");
  const typologyCrud = useCrud(api, "typologies");
  const subTypologyCrud = useCrud(api, "sub-typologies");
  const projectStatusCrud = useCrud(api, "project-statuses");
  const projectCrud = useCrud(api, "projects");


  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Fetch dropdowns and edit data only after mount
  useEffect(() => {
    if (!mounted) return;

    platterCrud.fetchTableData();
    typologyCrud.fetchTableData();
    subTypologyCrud.fetchTableData();
    projectStatusCrud.fetchTableData();

    if (id) {
      projectCrud.handleEdit(id);
    }
  }, [mounted, id]);

  if (!mounted) return null;

  // Map to dropdown options
  const platterOptions = platterCrud.tableData.map((i) => ({ label: i.name, value: i.id }));
  const typologyOptions = typologyCrud.tableData.map((i) => ({ label: i.name, value: i.id }));
  const subTypologyOptions = subTypologyCrud.tableData.map((i) => ({ label: i.name, value: i.id }));
  const projectStatusOptions = projectStatusCrud.tableData.map((i) => ({ label: i.name, value: i.id }));


  const fieldConfig = [
    { type: "dropdown", name: "platterId", label: "Select Platter", options: platterOptions },
    { type: "dropdown", name: "typologyId", label: "Select Typology", options: typologyOptions },
    { type: "dropdown", name: "subTypologyId", label: "Select Sub Typology", options: subTypologyOptions },
    { type: "dropdown", name: "projectStatusId", label: "Select Project Status", options: projectStatusOptions },
    { type: "dropdown", name: "status", label: "Status", 
      options: [
        { label: "Active", value: "1" },
        { label: "InActive", value: "0" },
      ],},
    { type: "text", name: "name", label: "Project Name" },
    { type: "text", name: "address", label: "Address" },
    { type: "text", name: "rera_no", label: "Rera No." },
    { type: "image", name: "qr_logo", label: "Qr Image" },
    { type: "image", name: "image", label: "Project Image" },
    { type: "text", name: "alt", label: "Image Alt Tag" },
    { type: "text", name: "short_description", label: "Short Description" },
    { type: "text", name: "meta_title", label: "Meta Title" },
    { type: "text", name: "meta_keywords", label: "Meta Keyword" },
    { type: "text", name: "meta_description", label: "Meta Description" },
  ];

  return (
    <section className={`${id ? "mr-[80px]" : ""}`}>
      <DynamicForm
        title={id ? "Edit Project" : "Create Project"}
        data={fieldConfig}
        defaultValues={projectCrud.editData}
        onSubmit={projectCrud.handleAddOrUpdate}
        isEdit={!!id}
      />
    </section>
  );
};

export default Project;
