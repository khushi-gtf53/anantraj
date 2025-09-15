"use client";
import React from "react";
import Label from "./Label";

const ArrayField = ({ field, value, setFormData }) => {
  const isMultiple = field.multiple !== false; // default true

  // Normalize value
  let itemsToRender;
  if (isMultiple) {
    itemsToRender = Array.isArray(value) ? value : [];
  } else {
    if (Array.isArray(value)) {
      itemsToRender = value.length > 0 ? value : [{}];
    } else if (typeof value === "object" && value !== null) {
      itemsToRender = [value];
    } else {
      itemsToRender = [{}];
    }
  }

const handleChange = (index, subName, subValue) => {
  const updated = [...itemsToRender];
  updated[index] = { ...updated[index], [subName]: subValue };

  setFormData((prev) => ({
    ...prev,
    [field.name]: isMultiple ? updated : updated[0], // object if single
  }));
};

const handleAdd = () => {
  if (isMultiple) {
    setFormData((prev) => ({
      ...prev,
      [field.name]: [
        ...(Array.isArray(prev[field.name]) ? prev[field.name] : []),
        {},
      ],
    }));
  } else {
    // single object → just reset it
    setFormData((prev) => ({
      ...prev,
      [field.name]: {},
    }));
  }
};

const handleRemove = (index) => {
  if (isMultiple) {
    const updated = [...itemsToRender];
    updated.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      [field.name]: updated,
    }));
  } else {
    // single object → just clear it
    setFormData((prev) => ({
      ...prev,
      [field.name]: {},
    }));
  }
};


  return (
    <div>
  {isMultiple && (
    <label className="block text-[15px] text-[var(--admin-primary)] mb-[5px] tracking-[0.8px] font-roboto">
      {field.label}
    </label>
  )}

  <div className={`grid ${isMultiple ? "grid-cols-2" : "grid-cols-1"} gap-4`}>
    {itemsToRender.map((item, i) => (
      isMultiple ? (
        // 🟢 Wrapper for multiple mode
        <div
          key={i}
          className="border border-[#45464f] p-3 rounded bg-transparent"
        >
          {field.fields.map((subField, j) => (
            <div key={j} className="mb-2">
              <Label
                name={item[subField.name] || ""}
                label={subField.label}
              />
              <input
                className="w-full h-[50px] block text-[12px] px-3 py-2 border border-[#45464f] rounded-[10px] bg-transparent text-[#eee] focus:outline-none focus:border-[#000]"
                placeholder={subField.label}
                value={item[subField.name] || ""}
                onChange={(e) =>
                  handleChange(i, subField.name, e.target.value)
                }
              />
            </div>
          ))}

          <button
            type="button"
            className="text-sm text-red-500 mt-2"
            onClick={() => handleRemove(i)}
          >
            Remove {i + 1}
          </button>
        </div>
      ) : (
        // 🟢 Direct fields in grid for non-multiple mode
        field.fields.map((subField, j) => (
          <div key={`${i}-${j}`}>
            <Label
              name={item[subField.name] || ""}
              label={subField.label}
            />
            <input
              className="w-full h-[50px] block text-[12px] px-3 py-2 border border-[#45464f] rounded-[10px] bg-transparent text-[#eee] focus:outline-none focus:border-[#000]"
              placeholder={subField.label}
              value={item[subField.name] || ""}
              onChange={(e) =>
                handleChange(i, subField.name, e.target.value)
              }
            />
          </div>
        ))
      )
    ))}
  </div>

  {isMultiple && (
    <button
      type="button"
      className="bg-blue-500 text-white px-3 py-1 rounded mt-4"
      onClick={handleAdd}
    >
      Add {field.label}
    </button>
  )}
</div>

  );
};

export default ArrayField;
