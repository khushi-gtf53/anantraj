import React, { useState } from "react";
import { CgTrending } from "react-icons/cg";
import { FaTools } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { ImImage } from "react-icons/im";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiMountains } from "react-icons/pi";
// import { NavLink } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useApi } from "../../hooks/useApi";
import { useCrud } from "../../hooks/useCrud";
import { BASE_ADMIN } from "../../../../config";
import { FaImage } from "react-icons/fa";
import Link from "next/link";

const menuItems = [<IoDocumentTextOutline />,<ImImage />,<GoInfo />,<FaTools />
];

const RightSidebar = ({projectId,activeSlug}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // default: Basic is active
    const api = useApi(BASE_ADMIN);
    const { tableData } = useCrud(api, "projects/all-sections");
  return (
    <div
      className={`fixed top-0 right-0 h-screen bg-[#13131d] text-white shadow-md z-50 transition-all duration-500 
        ${isOpen ? "w-[300px]" : "w-[80px]"}`}
    >
      <ul className="relative w-full">
        {/* Toggle Button */}
        <li className="mb-[10px] p-[30px] flex justify-start">
          <button
            className=" bg-[var(--admin-secondary)] ml-[-10px] h-[40px] w-[40px] shrink-0 rounded-full border border-white flex items-center justify-center cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-[20px] h-[14px]">
              <span
                className={`absolute top-0 left-0 w-full h-[2px] bg-white rounded transition-transform duration-300
              ${isOpen ? "rotate-[-45deg] translate-y-[6px]" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-white rounded transition-transform duration-300
              ${isOpen ? "rotate-[45deg] translate-y-[-6px]" : ""}`}
              />
            </div>
          </button>
        </li>

 {/* Static "Basic" item */}
        <li
        
            data-tooltip-id="right-sidebar-tooltip"
            data-tooltip-content="Basic"
          className={`h-[60px] group transition-all duration-300 flex items-center cursor-pointer 
            ${activeIndex === 0 ? "bg-[var(--admin-secondary)] text-white" : "hover:bg-[var(--admin-secondary)] text-[#717177] hover:text-white"}`}
          onClick={() => setActiveIndex(0)}
        >
          <Link href={`/admin/project/${projectId}`} className="flex p-[30px] items-center gap-[35px] w-full">
            <span className="icon text-xl flex justify-center">
              <IoDocumentTextOutline />
            </span>
            {isOpen && <span className="title whitespace-nowrap">Basic</span>}
          </Link>
        </li>

        {/* for banner */}
        
        <li
        
            data-tooltip-id="right-sidebar-tooltip"
            data-tooltip-content="Banner"
          className={`h-[60px] group transition-all duration-300 flex items-center cursor-pointer 
            ${activeIndex === 1 ? "bg-[var(--admin-secondary)] text-white" : "hover:bg-[var(--admin-secondary)] text-[#717177] hover:text-white"}`}
          onClick={() => setActiveIndex(1)}
        >
          <Link href={`/admin/project/${projectId}/banner`} className="flex p-[30px] items-center gap-[35px] w-full">
            <span className="icon text-xl flex justify-center">
              <FaImage />
            </span>
            <span className="title whitespace-nowrap">Banner</span>
          </Link>
        </li>
           {/* Dynamic items from API */}
        {tableData?.map((item, index) => (
          <li
            key={index}
            data-tooltip-id="right-sidebar-tooltip"
            data-tooltip-content={item?.name}
            className={`h-[60px] group transition-all duration-300 flex items-center cursor-pointer 
              ${item?.name === activeSlug ? "bg-[var(--admin-secondary)] text-white" : "hover:bg-[var(--admin-secondary)] text-[#717177] hover:text-white"}`}
            onClick={() => setActiveIndex(index + 2)}
          >
            <Link href={`/admin/project/${projectId}/${item?.name}`} className="flex p-[30px] items-center gap-[35px] w-full h-full">
              <span className="icon text-xl flex justify-center">
                {menuItems[index] || <IoDocumentTextOutline />}
              </span>
              <span className="title whitespace-nowrap">{item.name}</span>
            </Link>
          </li>
        ))}

        {/* Tooltip only when closed */}
        {!isOpen && <ReactTooltip id="right-sidebar-tooltip" place="left" />}
      </ul>
    </div>
  );
};

export default RightSidebar;
