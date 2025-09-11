'use client'

import CommonHeading from '@/src/components/common/CommonHeading';
import Pagination from '@/src/components/common/Pagination';
import React, { useState } from 'react'
// import CommonHeading from '../../components/common/CommonHeading'
// import Pagination from '../common/Pagination';

const jobs = [
  {
    role: "GM Marketing",
    location: "New Delhi & Gurugram ",
    qulification: "MBA in Marketing | Experience - 10 to 15 years",
    skills: "Execution of brand initiatives/media strategy/ support sales strategy by enhancing Brand Equity/ Strategize marketing and communication initiatives to enhance brand salience/Improve brand equity and new product laun"
  },
  {
    role: "GM Marketing",
    location: "New Delhi & Gurugram ",
    qulification: "MBA in Marketing | Experience - 10 to 15 years",
    skills: "Execution of brand initiatives/media strategy/ support sales strategy by enhancing Brand Equity/ Strategize marketing and communication initiatives to enhance brand salience/Improve brand equity and new product laun"
  },
]

export default function JobList() {
  const [currentPage, setCurrentPage] = useState(1);

  if (!jobs) return null;
  return (
    <div className='JobList pt-8' id='all-jobs'>
      <CommonHeading>Apply Here For Latest Jobs</CommonHeading>
      {
        jobs.length > 0 && (
          jobs.map((job, index) =>
            <div key={index} className="jobCard bg-white p-[30px] mt-8 grid lg:grid-cols-[1fr_auto] gap-4 items-center">
              <div className='order-1'>
                <span className="font-lato text-[14px] font-[400] tracking-[1px] leading-[27px]">{job.location}</span>
                <h3 className="font-sangbleu pt-2 uppercase tracking-[2px] leading-[30px] lg:leading-[40px] text-[13px] lg:text-[20px]">
                  {job.role}
                </h3>
              </div>

            <button  className="text-[#263A7F] py-[9px] px-12 border-y uppercase font-[600] text-[13px] lg:text-[16px] lg:justify-self-end lg:order-2 order-3">
            <a href="#join-us">    Apply Now</a>
              </button>

              <div className="col-span-full lg:pt-8 pt-3 lg:order-3 order-2">
                <h4 className="font-lato text-[14px] font-[400] tracking-[1px] leading-[27px]">
                  <b>Education - </b> {job.qulification}
                </h4>
                <h4 className="font-lato pt-2 text-[14px] font-[400] tracking-[1px] leading-[27px]">
                  <b>Skills - </b> {job.skills}
                </h4>
              </div>
            </div>

          )
        )
      }

      <div className='flex lg:justify-end justify-center lg:pt-5 pt-8'>
        <Pagination
          currentPage={currentPage}
          totalPages={4}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

    </div>
  )
}
