"use client";

import React, { useState, useMemo } from "react";
import CommonHeading from "../common/CommonHeading";
import Accordion from "../common/Accordion";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./projects.css";

const Projects = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "");
  const [currentPage, setCurrentPage] = useState(1);
  const [index, setIndex] = useState(-1);
  const imagesPerPage = 6;

  // 🔹 Active gallery data
  const activeTabObj = tabs.find((t) => t.key === activeTab);
  const gallery = activeTabObj?.images || [];

  const totalPages = Math.ceil(gallery.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const visibleImages = gallery.slice(startIndex, startIndex + imagesPerPage);

  // 🔹 Lightbox slides (saare images)
  const lightboxImages = gallery.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  // 🔹 Render gallery grid (memoized for performance)
  const renderProject = useMemo(() => {
    return (
      <div id="discover">
        {/* Images */}
        <div className="grid grid-cols-3 gap-5">
          {visibleImages.map((img, i) => (
            <div
              key={i}
              className="projectImg cursor-pointer relative w-full h-20 sm:h-64"
              onClick={() => setIndex(startIndex + i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i < 3}
              />
            </div>
          ))}

          {/* Empty placeholders */}
          {visibleImages.length < imagesPerPage &&
            Array.from({ length: imagesPerPage - visibleImages.length }).map(
              (_, idx) => (
                <div
                  key={`empty-${idx}`}
                  className="projectImg relative w-full h-20 sm:h-64 bg-gray-100"
                />
              )
            )}
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
  }, [visibleImages, currentPage, totalPages, activeTab, startIndex]);

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
              id={tab.key}
              key={tab.key}
              label={tab.label}
              isOpen={activeTab === tab.key}
              onClick={() =>
                setActiveTab(activeTab === tab.key ? "" : tab.key)
              }
            >
              <div id={tab.key} className=" md:mb-10">
                {activeTab === tab.key && renderProject}
              </div>
            </Accordion>
          ))}
        </div>
      </section>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={lightboxImages}
      />
    </>
  );
};

export default Projects;
