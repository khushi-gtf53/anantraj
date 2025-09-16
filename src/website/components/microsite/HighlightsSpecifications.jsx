"use client";

import { useState, useRef, useEffect } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Lightbox } from "yet-another-react-lightbox";
import gsap from "gsap";
import "yet-another-react-lightbox/styles.css";
import "./style.css"
import CommonHeading from "../../components/common/CommonHeading";

const HighlightsSpecifications = ({ sectionTitle, highlights = [], specifications = [] }) => {
  const [activeTab, setActiveTab] = useState("highlights");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

const renderItems = (items) => {
  const containerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.classList.add("dragging");
  };

  const handleMouseLeaveOrUp = () => {
    isDown.current = false;
    containerRef.current.classList.remove("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1; // multiplier = scroll speed
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeaveOrUp}
      onMouseUp={handleMouseLeaveOrUp}
      onMouseMove={handleMouseMove}
      className="flex gap-5 overflow-x-auto scroll-smooth scrollable-content cursor-grab active:cursor-grabbing"
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="highlight mb-5 min-w-[350px] border-r border-black/30 p-10 flex flex-col justify-between"
        >
          <div className="title font-sangbleu capitalize text-[20px]">
            {item.title}
          </div>

          {item.imgSrc && (
            <div
              className="view uppercase tracking-wider mt-10 text-[14px] cursor-pointer"
              onClick={() => {
                setLightboxSlides(items.map((i) => ({ src: i.imgSrc })));
                setOpenIndex(idx);
                setLightboxOpen(true);
              }}
            >
              view image
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


  const renderTab = (key, label, items) => {
    const isOpen = activeTab === key;
    const contentRef = useRef(null);

    useEffect(() => {
      if (contentRef.current) {
        if (isOpen) {
          gsap.fromTo(
            contentRef.current,
            { height: 0, autoAlpha: 0 },
            {
              height: "auto",
              padding: 10,
              autoAlpha: 1,
              duration: 0.6,
              ease: "power2.out",
              clearProps: "height",
            }
          );
        } else {
          gsap.to(contentRef.current, {
            height: 0,
            padding: 0,
            autoAlpha: 0,
            duration: 0.4,
            ease: "power2.in",
          });
        }
      }
    }, [isOpen]);

    return (
      <div className="mb-10">
        <div
          className="top_nav cursor-pointer py-5 flex items-center text-primaryred font-sangbleu uppercase"
          onClick={() => {
            if (!isOpen) {
              setActiveTab(key);
            } else {
              setActiveTab(key === "highlights" ? "specs" : "highlights");
            }
          }}
        >
          <div className="w-[45%] sm:w-[20%]">
            <h3>{label}</h3>
          </div>
          <div className="w-[25%] hidden sm:block h-[1px] bg-[#b3162f]" />
          <div className="w-[10%] flex justify-center">
            {isOpen ? <SlArrowUp size={30} /> : <SlArrowDown size={30} />}
          </div>
          <div className="w-[25%] hidden sm:block h-[1px] bg-[#b3162f]" />
          <div className="w-[45%] sm:w-[20%] text-end cursor-pointer">
            <h3>{isOpen ? "close" : "explore more"}</h3>
          </div>
        </div>

        {/* collapsible container */}
        <div
          ref={contentRef}
          style={{ overflow: "hidden", height: 0, opacity: 0, padding: 0 }}
          className="highlights_section w-full p-10 bg-[#FBF6F6] relative"
        >
          {renderItems(items)}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="highlights_specifications w-full wrapper bg-white">
        <div className="heading mb-10">         
          <CommonHeading>{sectionTitle}</CommonHeading>
        </div>
        {renderTab("highlights", "highlights", highlights)}
        {/* {renderTab("specs", "specifications", specifications)} */}
      </section>

      {/* Lightbox Popup */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={openIndex}
      />
    </>
  );
};

export default HighlightsSpecifications;
