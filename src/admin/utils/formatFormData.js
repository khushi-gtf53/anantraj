export const formatFormData = (formData = {}, fields = [], type) => {
  const formattedData = {};

  Object.entries(formData || {}).forEach(([key, value]) => {
    const field = fields.find((f) => f.name === key);

    if (field?.type === "image" || field?.type === "file" || field?.type === "video") {
      if (value instanceof File || value instanceof Blob) {
        formattedData[key] = value; // upload new file
      } 
      // else keep old value (string path)
      else if (typeof value === "string") {
        formattedData[key] = value;
      }
    } else if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
      formattedData[key] = JSON.stringify(value);
    } else if (value !== undefined && value !== null && value !== "") {
      formattedData[key] = value;
    }
  });

  if (type) {
    formattedData.type = type;
  }

  return formattedData;
};
