"use client";
import React from "react";
import TextInput from "./TextInput";
import Label from "./Label";

const ArrayField = ({ field, value = [], setFormData }) => {
  const handleChange = (index, subName, subValue) => {
    const updated = [...value];
    updated[index] = { ...updated[index], [subName]: subValue };
    setFormData((prev) => ({ ...prev, [field.name]: updated }));
  };

  const handleAdd = () => {
    setFormData((prev) => ({
      ...prev,
      [field.name]: [...(prev[field.name] || []), {}],
    }));
  };

  const handleRemove = (index) => {
    const updated = [...value];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, [field.name]: updated }));
  };

  return (
    <div>
      <label className="block text-[15px] text-[var(--admin-primary)] mb-[5px] tracking-[0.8px] font-roboto">{field.label}</label>
     <div className="grid grid-cols-2 gap-4">
      {(value || []).map((item, i) => (
        <div key={i} className="border border-[#45464f] p-3 mb-3 rounded bg-transparent">
          {field.fields.map((subField, j) => (
            <div key={j} className="mb-2">
              <Label name={item[subField.name] || ""} label={subField.label}/>
              <input
                className="w-full h-[50px] block text-[12px] px-3 py-2 border border-[#45464f] rounded-[10px] bg-transparent text-[#eee] focus:outline-none focus:border-[#000]"
                placeholder={subField.label}
                value={item[subField.name] || ""}
                onChange={(e) => handleChange(i, subField.name, e.target.value)}
              />
            </div>
          ))}

          <button
            type="button"
            className="text-sm text-red-500"
            onClick={() => handleRemove(i)}
          >
            Remove {i+1}
          </button>
        </div>
      ))}
      </div>

      <button
        type="button"
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={handleAdd}
      >
        Add {field.label}
      </button>
    </div>
  );
};

export default ArrayField;
