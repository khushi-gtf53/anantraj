"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import DynamicForm from "@/src/admin/components/form/DynamicForm";

// Page section configuration
export const pageSectionConfigs = {
  home: {
    hero: {
      type: "home_page_hero",
      endpoint: "/api/v1/home/hero",
      fields: [
        { type: "text", name: "heading", label: "Heading" },
        { type: "textarea", name: "description", label: "Description" },
      ],
    },
    counter: {
      type: "home_page_counter",
      endpoint: "/api/v1/home/counter",
      fields: [
        { type: "image", name: "desktop_file", label: "Desktop Image" },
        { type: "image", name: "mobile_file", label: "Mobile Image" },
        {
          type: "array",
          name: "other",
          label: "Counter Items",
          fields: [
            { type: "number", name: "number", label: "Number" },
            { type: "text", name: "header", label: "Header" },
            { type: "text", name: "icon", label: "Icon" },
          ],
        },
      ],
    },
    awards: {
      type: "home_page_awards",
      fields: [
        {
          type: "array",
          name: "other",
          label: "Awards",
          fields: [
            { type: "number", name: "number", label: "Number" },
            { type: "text", name: "header", label: "Header" },
            { type: "text", name: "icon", label: "Icon" },
          ],
        },
      ],
    },
  },
};

const Homepage = () => {
  const { slug } = useParams();
  const pageSections = pageSectionConfigs[slug] || {};

  // State to store token safely
  const [token, setToken] = useState("");

 useEffect(() => {
  const storedToken = localStorage.getItem("adminToken");
  console.log("Token from localStorage:", storedToken); // <-- this will log the token
  if (storedToken) setToken(storedToken);
}, []);
  // Handle form submission
  const handleAddOrUpdate = async (formData, sectionType, endpoint) => {
    if (!token) {
      toast.error("Token not found. Please login again.");
      return;
    }

    const apiEndpoint =
      (endpoint && endpoint.startsWith("http")
        ? endpoint
        : `https://160.191.15.59/api/v1/admins/other-sections`) ||
      "https://160.191.15.59/api/v1/admins/other-sections";

    const formPayload = new FormData();
    formPayload.append("type", sectionType);

    // Add all form fields
    for (const key in formData) {
      const value = formData[key];
      if (Array.isArray(value)) {
        formPayload.append(key, JSON.stringify(value));
      } else {
        formPayload.append(key, value);
      }
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: formPayload,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log("API response:", data);
      if (data.success) toast.success("Section saved successfully!");
      else toast.error(data.message || "Failed to save section");
    } catch (err) {
      console.error("API error:", err);
      toast.error("Failed to save section");
    }
  };

  return (
    <section>
      {Object.entries(pageSections).map(([sectionKey, config], index) => (
        <Card key={index}>
          <CardHeading>{sectionKey}</CardHeading>
          <div className="col-span-12">
            <DynamicForm
              title={`Form - ${sectionKey}`}
              data={config.fields}
              onSubmit={(formData) =>
                handleAddOrUpdate(formData, config.type, config.endpoint)
              }
              col={12}
            />
          </div>
        </Card>
      ))}
    </section>
  );
};

export default Homepage;




