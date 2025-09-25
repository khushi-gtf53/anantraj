"use client";
import React, { useState, useEffect } from "react";
import Label from "./Label";
import { FaUpload } from "react-icons/fa";

const VideoUpload = ({ label, name, value, onChange, required = false, reset }) => {
  const [preview, setPreview] = useState("");
  const [fileName, setFileName] = useState("");

  // Reset preview & filename on reset
  useEffect(() => {
    setPreview("");
    setFileName("");
  }, [reset]);

  // Sync preview when `value` changes (edit mode)
  useEffect(() => {
    if (value) setPreview(value);
  }, [value]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // SSR-safe: only call URL.createObjectURL on client
    const videoUrl = typeof window !== "undefined" ? URL.createObjectURL(file) : "";
    setPreview(videoUrl);
    setFileName(file.name);
    onChange(name, file); // Pass file back to parent
  };

  return (
    <div>
      {label && <Label name={name} label={label} required={required} />}

      <label
        htmlFor={name}
        className="flex items-center gap-3 cursor-pointer w-full h-[50px] px-4 py-2 border border-[#45464f] rounded-[10px] bg-transparent text-[#eee] text-[12px] hover:border-[#666]"
      >
        <FaUpload className="text-[#ccc] font-[13px]" />
         <span
  className="block text-[15px] text-[var(--admin-primary)] tracking-[0.8px] font-roboto 
             truncate overflow-hidden whitespace-nowrap max-w-[200px]"
>
  {fileName || preview || "Upload File"}
</span>
        <input
          type="file"
          accept="video/*"
          id={name}
          name={name}
          required={required}
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {preview && typeof window !== "undefined" && (
        <div className="mt-3">
          <video
            src={preview}
            controls
            className="w-[150px] h-[100px] border border-gray-500 rounded"
          />
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
