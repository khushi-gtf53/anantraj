"use client";
import React, { useState, useEffect, useRef } from "react";
import Label from "./Label";
import { FaUpload } from "react-icons/fa";
import { BASE_URL } from "@/config";

const ImageUpload = ({ label, name, value, onChange, required = false, reset }) => {
  const [preview, setPreview] = useState("");
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  // Reset preview & file input on reset
  useEffect(() => {
    setPreview("");
    setFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [reset]);

  // Sync preview when `value` changes (edit mode)
  useEffect(() => {
    if (value) setPreview(value);
  }, [value]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setFileName(file.name);
      onChange(name, file);
    };
    reader.readAsDataURL(file);
  };

  // SSR-safe preview URL
  const previewUrl =
    typeof window !== "undefined"
      ? preview instanceof File
        ? URL.createObjectURL(preview)
        : preview
      : "";

  return (
    <div>
      {label && <Label name={name} label={label} required={required} />}

      <label
        htmlFor={name}
        className="flex items-center gap-3 cursor-pointer w-full h-[50px] px-4 py-2 border border-[#45464f] rounded-[10px] bg-transparent text-[#eee] text-[12px] hover:border-[#666]"
      >
        <FaUpload className="text-[#ccc] font-[13px]" />
        <span className="block text-[15px] text-[var(--admin-primary)] tracking-[0.8px] font-roboto">
          {fileName || preview || "Upload File"}
        </span>
        <input
          type="file"
          accept="image/*"
          id={name}
          name={name}
          required={required}
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
      </label>

      {previewUrl && (
        <div className="mt-2">
          <img
            src={previewUrl.startsWith("http") ? previewUrl : `${BASE_URL}${previewUrl}`}
            alt="Preview"
            className="w-[50px] h-[50px] object-cover border border-gray-500 rounded"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
