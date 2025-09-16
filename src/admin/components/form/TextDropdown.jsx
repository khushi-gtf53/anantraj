import React from 'react';
import Label from './Label';

const TextDropdown = ({ name, label, value, onChange, options = [], required }) => {
  return (
    <div className="">
      {label && (
        <Label name={name} label={label} required={required}/>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        required={required}
        className="w-full h-[50px] block text-[15px] px-3 py-2 border border-[#45464f] rounded-[10px] bg-[transparent] text-[#eee] focus:outline-none focus:border-[#000] appearance-none"
      >
        <option value="">Select {label}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value} className='text-black'>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TextDropdown;
