import React from 'react';
import Label from './Label';

const TextArea = ({ label, name, value, onChange, required = false, col="", rows = 10 }) => {
  return (
    <div className="">
      {label && (
        <Label name={name} label={label} required={required}/>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}   
        placeholder={`Enter ${label}`}     
        className="w-full block text-[12px] px-3 py-2 border border-[#45464f] rounded-[10px] bg-transparent text-[#eee] focus:outline-none focus:border-[#000]"

      ></textarea>
    </div>
  );
};

export default TextArea;
