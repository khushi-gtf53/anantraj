"use client";

import gsap from "gsap/all";
import { useEffect, useRef, useState } from "react";

const AboutusTeam = () => {
  const [activeTab, setActiveTab] = useState("BOARD OF DIRECTORS");
  const [activePersonIndex, setActivePersonIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const incomingImageRef = useRef(null);
  const outgoingImageRef = useRef(null);

  const prevPersonIndexRef = useRef(activePersonIndex);

  useEffect(() => {
    if (prevPersonIndexRef.current === startIndex) return;

    const tl = gsap.timeline();

    tl.to(outgoingImageRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    tl.fromTo(
      incomingImageRef.current,
      {
        xPercent: -70,
        opacity: 0,
        duration: 1
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      },
      "<"
    );

    prevPersonIndexRef.current = startIndex;
  }, [startIndex]);

  const tabs = [
    "BOARD OF DIRECTORS",
    "OUR LEADERSHIP TEAM",
    "DATA CENTER TEAM",
  ];

  const teamData = {
    "BOARD OF DIRECTORS": [
      {
        name: "Amit Sarin",
        position: "Managing Director",
        image:
          "/assets/about/team/bod/1.webp",
      },
      {
        name: "Aman Sarin",
        position: "Director & CEO",
        image:
          "/assets/about/team/bod/2.webp",
      },
      {
        name: "Ashim Sarin",
        position: "Director & CEO",
        image:
          "/assets/about/team/bod/3.webp",
      },
      {
        name: "Kosaraju Veerayya Chowdary",
        position: "Director",
        image:
          "/assets/about/team/bod/4.webp",
      },
      {
        name: "Kulpreet Sond",
        position: "Director",
        image:
          "/assets/about/team/bod/5.webp",
      },
      {
        name: "Rajesh Tuteja",
        position: "Director",
        image:
          "/assets/about/team/bod/6.webp",
      },
      {
        name: "Rajendra Prasad Sharma",
        position: "Director",
        image:
          "/assets/about/team/leadership/2.webp",
      },
    ],
    "OUR LEADERSHIP TEAM": [
      {
        name: "Pankaj Kumar Gupta",
        position: "Chief Financial Officer",
        image:
          "/assets/about/team/leadership/1.webp",
      },

      {
        name: "Suraj Parkash Sethi",
        position: "President-Accounts",
        image:
          "/assets/about/team/leadership/3.webp",
      },
      {
        name: "Manoj Kumar Goyal",
        position: "Chief Business Officer",
        image:
          "/assets/about/team/leadership/4.webp",
      },
      {
        name: "Varun Khullar",
        position: "Chief Sales Officer",
        image:
          "/assets/about/team/leadership/5.webp",
      },
      {
        name: "Paramita Sengupta",
        position: "VP - Marketing & Communications",
        image:
          "/assets/about/team/leadership/6.webp",
      },
      {
        name: "Akhil Kumar",
        position: "Vice President-Lands",
        image:
          "/assets/about/team/leadership/7.webp",
      },
      {
        name: "Alok Rastogi",
        position: "Sr. GM - Contracts , Billing & QC",
        image:
          "/assets/about/team/leadership/8.webp",
      },
      {
        name: "Narayan Singh Rajpoot",
        position: "Sr. GM-Operations",
        image:
          "/assets/about/team/leadership/9.webp",
      },
      {
        name: "Sudhir Solanki",
        position: "Sr. GM-CRM",
        image:
          "/assets/about/team/leadership/10.webp",
      },
      {
        name: "P. Siva Prasad",
        position: "GM - Project for Tirupati",
        image:
          "/assets/about/team/leadership/11.webp",
      },
      {
        name: "Ajay Gandhi",
        position: "GM-Finance",
        image:
          "/assets/about/team/leadership/12.webp",
      },
      {
        name: "Mahesh Kumar",
        position: "GM-Accounts",
        image:
          "/assets/about/team/leadership/13.webp",
      },
      {
        name: "Rohit Sapra",
        position: "Sr. GM - Estate",
        image:
          "/assets/about/team/leadership/14.webp",
      },
      {
        name: "Ravinder Kumar",
        position: "GM-CEO Office",
        image:
          "/assets/about/team/leadership/15.webp",
      },
      {
        name: "Sandeep Bhalla",
        position: "GM-Construction",
        image:
          "/assets/about/team/leadership/16.webp",
      },
      {
        name: "Hemant Varshney",
        position: "Sr. GM - Corporate Leasing",
        image:
          "/assets/about/team/leadership/17.webp",
      },
      {
        name: "Tejas Dipakkumar Bhagat",
        position: "Chief Project Officer",
        image:
          "/assets/about/team/leadership/18.webp",
      },
    ],
    "DATA CENTER TEAM": [
      {
        name: "Gaurav Sharma",
        position: "Chief Technology Officer",
        image:
          "/assets/about/team/datacenter/1.webp",
      },
      {
        name: "Gagan Singh",
        position: "Chief Business Officer Data Centers",
        image:
          "/assets/about/team/datacenter/2.webp",
      },
      {
        name: "Sameer Srivastava",
        position: "Chief Operating Officer",
        image:
          "/assets/about/team/datacenter/3.webp",
      },
      {
        name: "Gaurav Sharma",
        position: "Vice President-Data Centres,Real Estate & Investor Relations",
        image:
          "/assets/about/team/datacenter/4.webp",
      },
      {
        name: "Kulbir Singh",
        position: "Sr. GM-Projects",
        image:
          "/assets/about/team/datacenter/5.webp",
      },
      {
        name: "Niranjan Lal Sharma",
        position: "Sr. GM-Electrical",
        image:
          "/assets/about/team/datacenter/6.webp",
      },
      {
        name: "Ravi Mohan Khurana",
        position: "Vice President-Services & Data Centres",
        image:
          "/assets/about/team/datacenter/7.webp",
      },
    ],
  };

  const currentTeam = teamData[activeTab] || [];
  const activePerson = currentTeam[startIndex] || {};

  const nextPerson = () => {
    const nextIndex = (startIndex + 1) % currentTeam.length;
    setStartIndex(nextIndex);
  };

  const prevPerson = () => {
    const prevIndex = (startIndex - 1 + currentTeam.length) % currentTeam.length;
    setStartIndex(prevIndex);
  };



  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActivePersonIndex(0);
    setStartIndex(0);
  };

  return (
    <section id="team" className="px-[20px] bg-[#FBF6F6] py-[40px] lg:p-[100px]">
      <h2 className="max-w-7xl mx-auto text-primaryred mb-[40px] uppercase lg:text-left text-center tracking-[2px] leading-[30px] lg:leading-[40px] font-sangbleu  text-[12.5px] lg:text-[20px]">
        Driven by Passion. United by Purpose.
      </h2>{" "}
      <div className="">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-12 lg:gap-16">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(tab)}
                  className={`text-center sm:text-left cursor-pointer transition-colors duration-200 ${activeTab === tab
                    ? "text-primaryblue font-bold"
                    : "text-gray-500 hover:text-gray-700 font-medium "
                    }`}
                >
                  <span className="text-xs md:text-sm tracking-wider">
                    {tab}
                  </span>

                </button>
              ))}
            </div>

            <div className="mt-8 h-px bg-black w-full" />
          </div>

          <div className="flex flex-col lg:flex-row items-center sm:items-start lg:items-center gap-8 lg:gap-12">
            <div className="flex-1 ">
              <div className="relative w-[300px] h-[300px]  sm:w-[380px] sm:h-[380px] bg-transparent overflow-hidden">
                <img
                  ref={outgoingImageRef}
                  src={teamData[activeTab][prevPersonIndexRef.current]?.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  style={{ opacity: 1 }}
                />

                <img
                  ref={incomingImageRef}
                  src={activePerson.image}
                  alt={activePerson.name}
                  className="absolute inset-0 w-full h-full object-cover z-20"
                  style={{ opacity: 0 }}
                />
              </div>

            </div>
                        <div className="flex flex-col w-full justify-center items-center">
              <div className="sm:my-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-primaryblue mb-2">
                  {activePerson.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {activePerson.position}
                </p>
              </div>
              <div className="flex lg:hidden justify-center w-full mt-2 gap-4">
                <button
                  onClick={prevPerson}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentTeam.length <= 1}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="#6B7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextPerson}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentTeam.length <= 1}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#6B7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Dots Indicator */}
                {/* <div className="flex items-center gap-2 ml-4">
              {currentTeam.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePersonIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === activePersonIndex ? "bg-gray-600" : "bg-gray-300"
                    }`}
                />
              ))}
            </div> */}
              </div>
              <div className="hidden lg:flex  items-center gap-4 self-center">
                <button
                  onClick={prevPerson}
                  className="p-3 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentTeam.length <= 1}
                >
                  <img
                    src="./assets/right-arrow.png"
                    alt="Previous"
                    className="h-5 w-5 rotate-180"
                  />
                </button>
                <button
                  onClick={nextPerson}
                  className="p-3 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentTeam.length <= 1}
                >
                  <img
                    src="./assets/right-arrow.png"
                    alt="Next"
                    className="h-5 w-5"
                  />
                </button>
              </div>
            </div>

            {/* Right Side - Team Grid */}
            <div className="flex-1 lg:max-w-2xl ">
              <div className="flex gap-3 md:gap-4">
                {[...Array(Math.min(5, currentTeam.length))].map((_, i) => {
                  const index = (startIndex + 1 + i) % currentTeam.length;
                  const person = currentTeam[index];

                  return (
                    <button
                      key={index}
                      onClick={() => setStartIndex(index)}
                      className={`relative group transition-all duration-200 }`}
                    >
                      <div className="sm:w-[90px] w-[60px] h-[60px] sm:h-[380px] overflow-hidden opacity-30 bg-gray-200">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>


                    </button>
                  );
                })}
              </div>

            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutusTeam;
