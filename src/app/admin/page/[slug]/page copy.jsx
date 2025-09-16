"use client";
import React, { useEffect, useState, useCallback } from "react";
import { RiPagesFill } from "react-icons/ri";
import { FaUpload } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useApi } from "@/src/admin/hooks/useApi";
import { BASE_ADMIN, BASE_URL } from "@/config";
import Card from "@/src/admin/components/card/Card";
import CardHeading from "@/src/admin/components/card/CardHeading";
import Label from "@/src/admin/components/form/Label";
import TextInput from "@/src/admin/components/form/TextInput";
import { toast } from "react-toastify";

const Homepage = () => {
  const { slug } = useParams();
  const { get, post, loading, error } = useApi(BASE_ADMIN);

  const [sections, setSections] = useState([]);
  const [images, setImages] = useState({});
  const [formValues, setFormValues] = useState({});

  /** Fetch section structure */
  const fetchSections = useCallback(async () => {
    if (!slug) return;
    try {
      const response = await get(`page-section-form/${slug}`);
      setSections(response?.data || []);
    } catch {
      toast.error("Failed to load section structure");
    }
  }, [slug, get]);

  /** Fetch pre-filled section data */
  const fetchPrefilled = useCallback(async () => {
    if (!slug) return;
    try {
      const response = await get(`page-section-list/${slug}`);
      const initialValues = {};
      response.data.forEach((item) => {
        initialValues[item.page_section] = { ...item };
      });
      setFormValues(initialValues);
    } catch {
      toast.error("Failed to load section data");
    }
  }, [slug, get]);

  useEffect(() => {
    fetchSections();
    fetchPrefilled();
  }, [fetchSections, fetchPrefilled]);

  /** Handle text input change */
  const handleInputChange = (sectionName, fieldKey, value) => {
    setFormValues((prev) => ({
      ...prev,
      [sectionName]: {
        ...(prev[sectionName] || {}),
        [fieldKey]: value,
      },
    }));
  };

  /** Handle image selection */
  const handleImageChange = (sectionId, fieldKey, file) => {
    const preview = URL.createObjectURL(file);
    setImages((prev) => ({
      ...prev,
      [sectionId]: {
        ...(prev[sectionId] || {}),
        [fieldKey]: { file, preview },
      },
    }));
  };

  /** Submit section form */
  const handleSubmit = async (e, section) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("page", section.page_type);
    formData.append("page_section", section.name);

    // Add text inputs
    const sectionValues = formValues[section.name] || {};
    Object.entries(sectionValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Add images
    const sectionImages = images[section.id] || {};
    Object.entries(sectionImages).forEach(([fieldKey, { file }]) => {
      formData.append(fieldKey, file);
    });

    try {
      await post("page-section-list", formData);
      toast.success("Section updated successfully");
    } catch (err) {
      toast.error(err.message || "Error uploading data");
    }
  };

  /** Show loading & error toasts */
  useEffect(() => {
    let toastId;
    if (loading) {
      toastId = toast.loading("Loading...");
    } else if (!loading && toastId) {
      toast.dismiss(toastId);
    }
    if (error) toast.error(error);

    return () => {
      if (toastId) toast.dismiss(toastId);
    };
  }, [loading, error]);

  return (
    <section>
      {/* {sections?.length > 0 ? ( */}
        {sections?.map((section) => {
          const fields = JSON.parse(section.fields_name || "{}");
          const permissions = JSON.parse(section.section_permissions || "{}");
          const sectionImages = images[section.id] || {};

          return (
            <Card key={section.id} className="mb-[30px]">
              <CardHeading icon={RiPagesFill}>{section.name}</CardHeading>
              <form onSubmit={(e) => handleSubmit(e, section)}>
                <div className="grid grid-cols-12 gap-[20px]">
                  {Object.entries(fields)
                    .filter(([fieldKey]) => permissions[fieldKey] === "true")
                    .map(([fieldKey, fieldLabel]) => {
                      const isImageField = fieldKey.toLowerCase().includes("image");
                      const fieldValue = formValues[section.name]?.[fieldKey];
                      const imgData = sectionImages[fieldKey];

                      return (
                        <div key={`${section.id}-${fieldKey}`} className="col-span-4">
                          <div className="mb-4">
                            <Label name={fieldKey} label={fieldLabel} />
                            {isImageField ? (
                              <div>
                                <label
                                  htmlFor={`${section.id}-${fieldKey}`}
                                  className="flex items-center gap-3 cursor-pointer w-full h-[50px] px-4 py-2 border border-[#45464f] rounded-[10px] bg-transparent text-[#eee] text-[12px] hover:border-[#666]"
                                >
                                  <FaUpload className="text-[#ccc] font-[13px]" />
                                  <span className="block text-[15px] text-[var(--admin-primary)] tracking-[0.8px] font-roboto">
                                    {imgData?.file?.name || fieldValue || "Upload File"}
                                  </span>
                                  <input
                                    type="file"
                                    id={`${section.id}-${fieldKey}`}
                                    onChange={(e) =>
                                      handleImageChange(section.id, fieldKey, e.target.files[0])
                                    }
                                    className="hidden"
                                  />
                                </label>

                                {(imgData?.preview || fieldValue) && (
                                  <div className="mt-2">
                                    <img
                                      src={imgData?.preview || `${BASE_URL}${fieldValue}`}
                                      alt="Preview"
                                      className="w-[50px] h-[50px] object-cover border border-gray-500 rounded"
                                    />
                                  </div>
                                )}
                              </div>
                            ) : (
                              <TextInput
                                name={fieldKey}
                                value={fieldValue || ""}
                                placeholder={fieldLabel}
                                onChange={(e) =>
                                  handleInputChange(section.name, fieldKey, e.target.value)
                                }
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className="text-end mt-[20px]">
                  <button
                    type="submit"
                    className="bg-[var(--admin-secondary)] border-none rounded-[5px] text-[#eee] font-roboto tracking-[0.4px] px-[25px] py-[7px]"
                  >
                    Save
                  </button>
                </div>
              </form>
            </Card>
          );
        })}
      {/* // ) : (
      //   <p>No sections found</p>
      // )} */}
    </section>
  );
};

export default Homepage;
