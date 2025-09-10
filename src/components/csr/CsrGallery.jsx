"use client";

import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import CommonHeading from "../common/CommonHeading";
import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";

const basepath = "/assets/csr/gallery";

// Move static data outside component for performance
const galleryData = Array.from({ length: 27 }, (_, i) => ({
  img: `${i + 1}.webp`,
  alt: `Gallery ${i + 1}`,
}));

const CsrGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  const slides = galleryData.map((g) => ({
    src: `${basepath}/${g.img}`,
    alt: g.alt,
  }));

  const imagesToShow = showAll ? galleryData : galleryData.slice(0, 6);

  return (
    <>
      <section className="csr_gallery relative bg-[#FBF6F6] w-full">
          <CommonHeading>a glimpse of our initiatives</CommonHeading>

          <div className="gallery pt-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {imagesToShow.map((gallery, i) => {
                // Adjust index for Lightbox to always match global slides
                const globalIndex = galleryData.findIndex(
                  (g) => g.img === gallery.img
                );

                return (
                  <div key={i} className="galleryImg">
                    <Image
                      src={`${basepath}/${gallery.img}`}
                      alt={gallery.alt}
                      width={500}
                      height={400}
                      className="w-full h-auto cursor-pointer object-cover"
                      onClick={() => {
                        setOpenIndex(globalIndex);
                        setLightboxOpen(true);
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {!showAll && (
              <div
                className="explore w-full flex flex-col items-center space-y-2 my-5 justify-center cursor-pointer"
                onClick={() => setShowAll(true)}
              >
                <SlArrowDown className="lg:text-[22px] text-[18px]" />
                <div className="text-primaryblue uppercase font-bold">
                  explore more images
                </div>
              </div>
            )}
          </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={openIndex}
      />
    </>
  );
};

export default CsrGallery;
