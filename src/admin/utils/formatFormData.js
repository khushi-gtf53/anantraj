// src/admin/utils/formatFormData.js
export const formatFormData = (formData = {}, fields = [], type) => {
  const formattedData = {};

  Object.entries(formData || {}).forEach(([key, value]) => {
    const field = fields.find((f) => f.name === key);

    if (field?.type === "image" || field?.type === "file") {
      if (value instanceof File || value instanceof Blob) {
        // ✅ Only send if new upload
        formattedData[key] = value;
      }
      // ❌ Skip if it's just a string (old URL/path)
    } else if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
      formattedData[key] = JSON.stringify(value);
    } else if (value !== undefined && value !== null && value !== "") {
      formattedData[key] = value;
    }
  });

  // ✅ Only add type when explicitly passed
  if (type) {
    formattedData.type = type;
  }

  return formattedData;
};
