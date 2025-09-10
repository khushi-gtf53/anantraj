'use client'

import React from 'react'
import CommonHeading from '@/src/components/common/CommonHeading'

export default function CareerForm() {
  const inputClasses = "peer w-full border-b border-gray-400 focus:outline-none focus:border-[#263A7F] pt-6 pb-1";
  const labelClasses = "absolute left-0 top-1 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#263A7F]";

  return (
    <div className="pt-8" id='join-us'>
      <CommonHeading>Build Your Career, Build With Us</CommonHeading>

      <form className="lg:p-[50px] p-[30px] bg-white mt-8">
        <div className="flex flex-wrap gap-6">

          {/* Full Name */}
          <div className="relative lg:w-[30%] w-full">
            <input type="text" id="fullName" className={inputClasses} required />
            <label htmlFor="fullName" className={labelClasses}>Full Name</label>
          </div>

          {/* Mail Id */}
          <div className="relative lg:w-[30%] w-full">
            <input type="email" id="mail" className={inputClasses} required />
            <label htmlFor="mail" className={labelClasses}>Mail Id</label>
          </div>

          {/* Number */}
          <div className="relative lg:w-[30%] w-full">
            <input type="tel" id="number" className={inputClasses} required />
            <label htmlFor="number" className={labelClasses}>Number</label>
          </div>

          {/* Job Profile */}
          <div className="relative lg:w-[48%] w-full">
            <input type="text" id="jobProfile" className={inputClasses} required />
            <label htmlFor="jobProfile" className={labelClasses}>Job Profile</label>
          </div>

          {/* Job Skills */}
          <div className="relative lg:w-[48%] w-full">
            <input type="text" id="skills" className={inputClasses} required />
            <label htmlFor="skills" className={labelClasses}>Job Skills</label>
          </div>

          {/* Job Experience */}
          <div className="relative lg:w-[48%] w-full">
            <input type="text" id="experience" className={inputClasses} required />
            <label htmlFor="experience" className={labelClasses}>Job Experience</label>
          </div>

          {/* File Upload */}
          <div className="relative lg:w-[48%] w-full">
            <input
              type="file"
              title='Upload CV'
              className="block mt-5 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-sm file:font-semibold file:bg-[#263A7F] file:text-white hover:file:bg-[#263a7f] cursor-pointer border-b border-gray-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 w-full">
          <button className='text-[#263A7F] lg:w-[23%] w-full cursor-pointer block py-[9px] px-12 border-y uppercase font-[600]'>
            Apply Now
          </button>
        </div>
      </form>
    </div>
  )
}
