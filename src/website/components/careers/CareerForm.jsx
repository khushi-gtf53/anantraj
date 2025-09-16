'use client'

import CommonHeading from '@/src/website/components/common/CommonHeading'
import React from 'react'

export default function CareerForm() {

  

  return (
    <div className="pt-8" id='join-us'>
      <CommonHeading>Build Your Career, Build With Us</CommonHeading>

      <form className="lg:p-[50px] p-[30px] bg-white mt-8">
        <div className="flex flex-wrap gap-6">

          {/* Full Name */}
          <div className="relative lg:w-[30%] w-full">
            <input
              type="text"
              id="fullName"
              className="peer w-full border-b border-gray-400 focus:outline-none focus:border-[#263A7F] pt-6 pb-1"
              required
            />
            <label
              htmlFor="fullName"
              className="absolute left-0 top-1 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#263A7F]"
            >
              Full Name
            </label>
          </div>

          {/* Mail Id */}
          <div className="relative lg:w-[30%]  w-full">
            <input
              type="email"
              id="mail"
              className="peer w-full border-b border-gray-400 focus:outline-none focus:border-[#263A7F] pt-6 pb-1"
              required
            />
            <label
              htmlFor="mail"
              className="absolute left-0 top-1 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#263A7F]"
            >
              Mail Id
            </label>
          </div>

          {/* Number */}
          <div className="relative lg:w-[30%]  w-full">
            <input
              type="tel"
              id="number"
              className="peer w-full border-b border-gray-400 focus:outline-none focus:border-[#263A7F] pt-6 pb-1"
              required
            />
            <label
              htmlFor="number"
              className="absolute left-0 top-1 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#263A7F]"
            >
              Number
            </label>
          </div>

          {/* Job Profile */}
          <div className="relative lg:w-[48%] w-full">
            <input
              type="text"
              id="jobProfile"
              className="peer w-full border-b border-gray-400 focus:outline-none focus:border-[#263A7F] pt-6 pb-1"
              required
            />
            <label
              htmlFor="jobProfile"
              className="absolute left-0 top-1 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#263A7F]"
            >
              Job Profile
            </label>
          </div>

          {/* Job Experience 1 */}
          <div className="relative lg:w-[48%] w-full">
            <input
              type="text"
              id="skills"
              className="peer w-full border-b border-gray-400 focus:outline-none focus:border-[#263A7F] pt-6 pb-1"
              required
            />
            <label
              htmlFor="skills"
              className="absolute left-0 top-1 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#263A7F]"
            >
              Job Skills
            </label>
          </div>

          {/* Job Experience 2 */}
          <div className="relative lg:w-[48%] w-full">
            <input
              type="text"
              id="experience"
              className="peer w-full border-b border-gray-400 focus:outline-none focus:border-[#263A7F] pt-6 pb-1"
              required
            />
            <label
              htmlFor="experience"
              className="absolute left-0 top-1 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#263A7F]"
            >
              Job Experience
            </label>
          </div>

          {/* File Upload */}
          <div className="relative lg:w-[48%] w-full">
            <input type="file"
              title='Upload CV'
              className="block mt-5 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-sm file:font-semibold file:bg-[#263A7F] file:text-white hover:file:bg-[#263a7f] cursor-pointer border-b border-gray-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 w-full">
          <button className='text-[#263A7F] lg:w-[23%] w-full cursor-pointer block py-[9px] px-12 border-y uppercase font-[600]'>Apply Now</button>
        </div>
      </form>
    </div>
  )
}
