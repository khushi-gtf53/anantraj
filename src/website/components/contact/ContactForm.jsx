"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div id="discover" className="font-lato  bg-white">
      {/* Header Section */}
      <div id="contactDetails"  className="flex wrapper flex-col md:flex-row justify-between mb-12 gap-8">
        {/* Left Column - Residential & Retail */}
        <div className="flex-1">
          <h2 className="text-[14px] leading-[26px] font-lato  text-primaryblue mb-6 tracking-[1.5px]">
            ANANT RAJ ESTATE TOWNSHIP
            <br />
            (RESIDENTIAL, RETAIL)
          </h2>
          <div className="space-y-4  text-[13px] tracking-[1.2px]">
            <p>Email Id - <a href="mailto:estate@anantrajlimited.com"> estate@anantrajlimited.com</a></p>
            <p>Phone Number - <a href="tel:91-89298 00666"> +91-89298 00666</a></p>
          </div>
        </div>

        {/* Right Column - Commercial Leasing */}
        <div className="flex-1">
          <h2 className="text-[14px] leading-[26px] font-lato  text-primaryblue mb-6  tracking-[1.5px]">
            COMMERCIAL LEASING OF IT PARKS, SEZ
            <br />& HOSPITALITY
          </h2>
          <div className="space-y-4 text-[13px] tracking-[1.2px]">
          <p>Email Id -  <a href="mailto:leasing@anantrajlimited.com"> leasing@anantrajlimited.com</a></p>
            <p>Phone Number - <a href="tel:91-11-43559100">+91-11-43559100 / 43692300</a></p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div id="queryForm" className="space-y-8  lg:space-y-16 wrapper bg-[#FBF6F6]">
        {/* First Row - Name and Email */}
        <div className="space-y-8 lg:space-y-0 flex flex-col md:flex-row lg:gap-8">
          <div className="flex-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full pb-2 border-0 border-b border-gray-400 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 text-base"
            />
          </div>
          <div className="flex-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Id"
              className="w-full pb-2 border-0 border-b border-gray-400 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 text-base"
            />
          </div>
        </div>

        {/* Second Row - Phone Number (Full Width) */}
        <div>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Your Number"
            className="w-full pb-2 border-0 border-b border-gray-400 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 text-base"
          />
        </div>

        {/* Third Row - Message and Submit Button */}
        <div className="flex flex-col md:flex-row gap-8 lg:items-end">
          <div className="lg:w-auto w-full flex-1">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="1"
              className="w-full pb-2 border-0 border-b border-gray-400 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-600 text-base resize-none"
            />
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={handleSubmit}
              className="  text-primaryblue  font-[500] text-sm tracking-[1.2px]"
            >
              SUBMIT NOW
            </button>
          </div>
        </div>
      </div>
      <img
        src="./assets/location.webp"
        className="lg:h-auto object-cover h-[250px]"
        alt="location"
      />

      <div id="address" className="flex lg:p-[100px] !pb-[0px] lg:mt-0 mt-[40px] px-[20px] flex-col md:flex-row justify-between mb-12 gap-8">
        {/* Left Column - Residential & Retail */}
        <div className="flex-1">
          <h2 className="text-[14px] uppercase leading-[26px] font-lato  text-primaryblue mb-6 tracking-[1.5px]">
            Head Office
          </h2>
          <div className="space-y-4  text-[13px] tracking-[1.2px]">
            <p>H-65, Connaught Place, New Delhi-110001, India</p>
          </div>
        </div>

        {/* Right Column - Commercial Leasing */}
        <div className="flex-1">
          <h2 className="text-[14px] uppercase leading-[26px] font-lato  text-primaryblue mb-6  tracking-[1.5px]">
            Registered Office
          </h2>
          <div className="space-y-4 text-[13px] tracking-[1.2px]">
            <p>Plot No Cp-1, Sector 8, IMT Manesar, Haryana 122051</p>
          </div>
        </div>
      </div>
    </div>
  );
}
