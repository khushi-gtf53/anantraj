"use client";

import React, { useState, useEffect, useMemo } from "react";
import CommonHeading from "../common/CommonHeading";
import Accordion from "../common/Accordion";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './projects.css'

const Projects = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [index, setIndex] = useState(-1);
  const [lightboxImages, setLightboxImages] = useState([]);
  const imagesPerPage = 6;

  // 🔹 Reset sub-tab when tab changes
  useEffect(() => {
    const activeTabObj = tabs.find((t) => t.key === activeTab);
    if (activeTabObj) {
      const subTabs = Object.keys(activeTabObj.projects || {});
      if (subTabs.length > 0) {
        setActiveSubTab(subTabs[0]);
        setCurrentPage(1);
      }
    }
  }, [activeTab, tabs]);

  // 🔹 Memoize rendering logic
  const renderProject = useMemo(() => {
    const activeTabObj = tabs.find((t) => t.key === activeTab);
    if (!activeTabObj) return null;

    const subTabs = Object.entries(activeTabObj.projects || {}).filter(([key, value])=>value.length > 0);
    const subGallery = activeTabObj.projects[activeSubTab] || [];

    const totalPages = Math.ceil(subGallery.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const visibleImages = subGallery.slice(startIndex, startIndex + imagesPerPage);

    const lightboxImage = visibleImages?.map(image=>({
      src:image
    }))

    setLightboxImages(lightboxImage)

    return (
      <div>
        {/* Sub-tabs */}
        {subTabs.length > 0 && (
          <div className="tabs flex gap-15 text-xl mb-10">
            {subTabs.map((sub) => (
              <button
                key={sub}
                onClick={() => {
                  setActiveSubTab(sub);
                  setCurrentPage(1);
                }}
                className={`cursor-pointer text-[18px] tracking-[1px] ${
                  activeSubTab === sub
                    ? "font-bold text-primaryblue"
                    : "text-gray-400"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Images */}
        <div className="grid grid-cols-3 gap-5">
          {visibleImages.map((src, i) => (
            <div key={i} className="projectImg cursor-pointer relative w-full h-20 sm:h-64"  onClick={()=>setIndex(i)}>
              <Image
                src={src}
                alt={`project-${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i < 3} 
              />
            </div>
          ))}
          {visibleImages.length < imagesPerPage &&
            Array.from({
              length: imagesPerPage - visibleImages.length,
            }).map((_, idx) => (
              <div
                key={`empty-${idx}`}
                className="projectImg relative w-full h-20 sm:h-64 bg-gray-100"
              />
            ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination gap-2 flex justify-end items-center mt-5">
            {Array.from({ length: totalPages }, (_, i) => (
              <React.Fragment key={i}>
                <Link href={`#${activeTab}`}>
                  <button
                    onClick={() => setCurrentPage(i + 1)}
                    className={`cursor-pointer ${
                      currentPage === i + 1
                        ? "text-primaryblue font-bold"
                        : "text-gray-400"
                    }`}
                  >
                    {i + 1}
                  </button>
                </Link>
                {i < totalPages - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  }, [activeTab, activeSubTab, currentPage, tabs]);

  return (
    <>
      <section className="projects">
        <div className="platter_projects relative w-full wrapper bg-[#FBF6F6]">
          <div className="mb-10">
            <CommonHeading>
              an unforgettable once - in - a - lifetime experience
            </CommonHeading>
          </div>

          {tabs.map((tab) => (
            <Accordion
              key={tab.key}
              label={tab.label}
              isOpen={activeTab === tab.key}
              onClick={() =>
                setActiveTab(activeTab === tab.key ? "" : tab.key)
              }
            >
              <div id={tab.key} className=" md:mb-10">{renderProject}</div>
            </Accordion>
          ))}
        </div>
      </section>


      <Lightbox
        index={index}
        open={index>=0}
        slides={lightboxImages}
        close={()=>setIndex(-1)}
      />
    </>
  );
};

export default Projects;
