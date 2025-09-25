"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaUpload } from "react-icons/fa";

const FileUpload = ({ name, label, value, onChange, required, reset, accept = ".pdf,.doc,.docx,.txt" }) => {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    // If value is a string (existing URL/path), show it as default
    if (typeof value === "string") {
      setFileName(value.split("/").pop()); // just filename from path
    } else if (value instanceof File) {
      setFileName(value.name); // show selected file name
    } else {
      setFileName("");
    }
  }, [value, reset]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange(name, file); // still pass File object to formData
    }
  };

  return (
    <div>
      {label && <label className="block mb-1 text-sm font-medium text-gray-300">{label}</label>}

      <label
        htmlFor={name}
        className="flex items-center gap-3 cursor-pointer w-full h-[50px] px-4 py-2 border border-[#45464f] rounded-[10px] bg-transparent text-[#eee] text-[12px] hover:border-[#666]"
      >
        <FaUpload className="text-[#ccc] text-[13px]" />
        <span
          className="block text-[15px] text-[var(--admin-primary)] tracking-[0.8px] font-roboto truncate overflow-hidden whitespace-nowrap max-w-[200px]"
        >
          {fileName || "Upload File"}
        </span>

        <input
          type="file"
          id={name}
          name={name}
          required={required}
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default FileUpload;
