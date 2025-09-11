"use client";
import { BASE_ADMIN } from "@/config";
import DynamicForm from "@/src/admin/components/form/DynamicForm";
import { useApi } from "@/src/admin/hooks/useApi";
import { useCrud } from "@/src/admin/hooks/useCrud";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Project = () => {
  const { id } = useParams(); // optional id param
  const api = useApi(BASE_ADMIN);

  const { editData, handleAddOrUpdate, handleEdit } = useCrud(api, "projects");

  useEffect(() => {
    if (id) {
      handleEdit(id); // fetch project details when editing
    }
  }, [id]);

  // fetch lists
  const { tableData: platterList } = useCrud(api, "platter");
  const { tableData: typologyList } = useCrud(api, "typologies");
  const { tableData: subTypologyList } = useCrud(api, "sub-typologies");
  const { tableData: projectStatusList } = useCrud(api, "project-statuses");



  // map to dropdown options
  const platterOptions =
  platterList?.map((item) => ({
    label: item.name,
    value: item.id,
  })) || [];
const typologyOptions =
  typologyList?.map((item) => ({
    label: item.name,   
    value: item.id,
  })) || [];

const subTypologyOptions =
  subTypologyList?.map((item) => ({
    label: item.name,  
    value: item.id,
  })) || [];
const projectStatusOptions =
  projectStatusList?.map((item) => ({
    label: item.name,  
    value: item.id,
  })) || [];

 
const fieldConfig = [
  { type: "dropdown", name: "platterId", label: "Select Platter", options: platterOptions },
  { type: "dropdown", name: "typologyId", label: "Select Typology", options: typologyOptions },
  { type: "dropdown", name: "subTypologyId", label: "Select Sub Typology", options: subTypologyOptions },
  { type: "dropdown", name: "projectStatusId", label: "Select Project Status", options: projectStatusOptions},
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
        data={fieldConfig} // pass config with dropdown options
        onSubmit={handleAddOrUpdate}
        defaultValues={editData} // pass pre-filled values for edit mode
        isEdit={!!id}   
      />
    </section>
  );
};

export default Project;
