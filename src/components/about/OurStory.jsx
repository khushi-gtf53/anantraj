"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import HTMLFlipBook from "react-pageflip";

const OurStory = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const firstBookRef = useRef(null);
  const secondBookRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 450, height: 500 });
  const [bookKey, setBookKey] = useState(0);
  const nextPage = (bookRef) => {
    if (bookRef.current) {
      const pageFlip = bookRef.current.pageFlip();
      pageFlip.flipNext();
      pageFlip.update();
      console.log("ext");
    }
  };

  const prevPage = (bookRef) => {
    if (bookRef.current) {
      const pageFlip = bookRef.current.pageFlip();
      pageFlip.flipPrev();
      pageFlip.update();
    }
  };

  const tab1Pages = [
    {
      heading: "Where Stories Sing and Beliefs Belong.",
      title: "our story",
      subtitle: "Established in 1969… ",
      subtitle2: "Yet our story runs far deeper.",
      content: `It began over a century ago, when the Sarin family first took root in North India’s soil as custodians of land, as builders of trust, long before “real estate” was ever an industry.`,
    },
    {
      image: "/assets/about/story/storybg.webp",
      content: `In that era of honour, our founding patriarch was recognised with the title Rai Sahib and the symbolic takhti. A mark not of what was to come, but of principles already lived: honour, responsibility, and unwavering trust.`,
    },
    {
      content: `The name we carry — Anant Raj — is itself a tribute to that legacy. Drawn from Lala Anant Ram Sarin and Smt. Raj Kumari Sarin, it is a name that binds family and future, heritage and horizon.`,
      content2: `Through decades of transformation, the spirit endured — quietly, steadily, without noise or spectacle. Over 21 million sq. ft. built. 300 acres of land stewarded. Generations passing down not just assets, but values — like heirlooms.`,
    },
    {
      image: "/assets/about/story/storybg2.webp",
      content: `And today, with the fourth generation at the helm, we stand as more than developers. We are a gharana of real estate craftsmanship — an institution where tradition anchors ambition, and innovation carries heritage forward.`,
    },
  ];

  const tab2points = [
    "We are not builders of structures.",
    "We are custodians of permanence.",
    "For generations, we’ve stood on land that holds memory, meaning, and promise.",
    "We don’t chase trends; we set a standard that endures.",
    "Our homes are not displays of opulence.",
    "They are sanctuaries of purpose designed with depth, rooted in culture, and imagined for tomorrow.",
    "In a world that’s moving faster than ever, we believe in spaces that hold you still.",
    "Still with pride. Still with peace. Still with presence.",
    "Our legacy isn’t just about what we’ve built.",
    "It’s about what we’ve upheld: ethics, scale, integrity, vision.",
    "To the new Indian rooted in identity, rising in ambition.",
    "We are your quiet certainty in a loud world.",
    "A place where heritage breathes, innovation lives, and every square foot whispers dignity.",
  ];

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 768) {
        // Mobile dimensions
        setDimensions({ width: 380, height: 550 });
      } else {
        // Desktop dimensions
        setDimensions({ width: 450, height: 500 });
      }
    };

    updateDimensions(); // Set on initial render
    window.addEventListener("resize", updateDimensions); // Update on resize

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const flipToFirstPage = () => {
      if (activeTab === "tab1" && firstBookRef.current?.pageFlip) {
        const book = firstBookRef.current.pageFlip();
        if (book && typeof book.flip === "function") {
          book.flip(1);
        }
      }

      if (activeTab === "tab2" && secondBookRef.current?.pageFlip) {
        const book = secondBookRef.current.pageFlip();
        if (book && typeof book.flip === "function") {
          book.flip(1);
        }
      }
    };

    // Delay execution to ensure flipbook is mounted
    const timeout = setTimeout(flipToFirstPage, 100);
    setBookKey((prev) => prev + 1);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <section
      id="story"
      className="story relative w-full h-full bg-[#FBF6F6] px-[20px] py-[40px] lg:p-[100px]"
    >
      <div className="max-w-[95%] mx-auto">
        <div className="heading">
          <h3 className="text-primaryred font-sangbleu mb-[40px] uppercase lg:text-left text-center tracking-[2px] leading-[30px] lg:leading-[40px] text-[12.5px] lg:text-[20px]">
            <span>Our Legacy, Our Vision : </span>
            <span className="block"> Crafting Timeless Spaces</span>
          </h3>
        </div>
        <div className="grid grid-cols-12">
          <div className="block sm:hidden tabs  col-span-12 sm:col-span-2">
            {/* Tab 1 */}
            <div className="flex justify-evenly">
              <div
                className={`tab1 py-3  transition-all text-end  duration-200 cursor-pointer ${
                  activeTab === "tab1" ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setActiveTab("tab1")}
              >
                <h3 className="uppercase text-primaryblue transition-all duration-150 text-end text-[14px]">
                  {" "}
                  brand story
                </h3>
                <div
                  className={`h-10  mx-auto mt-3 w-[1px] transition-all duration-200 bg-black ${
                    activeTab === "tab1" ? "visible" : "invisible"
                  }`}
                ></div>
              </div>

              {/* Tab 2 */}
              <div
                className={`tab2 py-3   transition-all duration-200 cursor-pointer ${
                  activeTab === "tab2" ? "opacity-100 " : "opacity-50"
                }`}
                onClick={() => setActiveTab("tab2")}
              >
                <h3 className="uppercase text-primaryblue transition-all duration-150 text-[14px]">
                  manifesto
                </h3>
                <div
                  className={`h-10 mx-auto mt-3  w-[1px]  transition-all duration-200 bg-black ${
                    activeTab === "tab2" ? "visible" : "invisible"
                  }`}
                ></div>
              </div>

              {/* Navigation Buttons for First Book */}
              <div className="hidden sm:flex gap-20 mt-4  relative">
                <button
                  onClick={() =>
                    prevPage(
                      activeTab === "tab1" ? firstBookRef : secondBookRef
                    )
                  }
                  className="w-8 h-8 cursor-pointer capitalize gap-3 rounded-full flex items-center justify-center "
                >
                  <img
                    src="./assets/right-arrow.png"
                    alt="Previous"
                    className="h-5 w-5 rotate-180"
                  />{" "}
                  prev
                </button>

                <button
                  onClick={() =>
                    nextPage(
                      activeTab === "tab1" ? firstBookRef : secondBookRef
                    )
                  }
                  className="w-8 h-8 gap-3 cursor-pointer capitalize rounded-full flex items-center justify-center "
                >
                  Next
                  <img
                    src="./assets/right-arrow.png"
                    alt="Next"
                    className="h-5 w-5"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="book col-span-12 sm:col-span-10">
            {/* Conditionally Render Books Based on Active Tab */}
            {activeTab === "tab1" && (
              <div className="w-full relative transition-all duration-150 flex flex-col items-center sm:items-start">
                <div className="startHeading hidden sm:block absolute uppercase md:text-sm lg:text-xl max-w-[35%] left-16 top-[25%] leading-10 mb-5 text-red-800 tracking-widest text-center font-sangbleu">
                  From the soil of North India, a timeless legacy took root.
                </div>
                <div className="endHeading absolute hidden sm:block uppercase text-xl max-w-[30%] right-42 top-[25%] leading-10 mb-5 text-red-800 tracking-widest text-center font-sangbleu">
                  Anant Raj. A brand built with time. A legacy carried with
                  pride.
                </div>
                <Suspense fallback={"Loading..."}>
                  <HTMLFlipBook
                    key={bookKey}
                    width={dimensions.width}
                    height={dimensions.height}
                    startPage={1}
                    showCover={true}
                    ref={firstBookRef}
                    className="no-shadow"
                    drawShadow={false}
                    useMouseEvents={true}
                  >
                    {/* Cover Page */}
                    <div className="demoPage bg-white shadow-xl">
                      <img
                        src="/assets/about/story/bookcover.webp"
                        alt="book cover"
                        className="object-cover w-[380px] h-[550px] sm:w-[450px] sm:h-[500px]"
                      />
                    </div>

                    {/* Dynamic Pages */}
                    {tab1Pages.map((page, index) => (
                      <div
                        key={index}
                        className="demoPage bg-white px-12 py-20 shadow-xl relative"
                      >
                        <img
                          src="/assets/about/story/bookbg.webp"
                          alt=""
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                        <div className="flex relative flex-col justify-center items-center w-full h-full gap-4 text-[14px] text-center leading-relaxed">
                          {page.heading && (
                            <h3 className="uppercase text-red-800 tracking-widest text-center font-sangbleu mb-4">
                              {page.heading}
                            </h3>
                          )}
                          {page.title && (
                            <div className="heading py-5 uppercase font-stringfree text-3xl">
                              {page.title}
                            </div>
                          )}
                          {page.subtitle && (
                            <div className="storyline italic pt-2">
                              {page.subtitle}
                            </div>
                          )}
                          {page.subtitle2 && (
                            <div className="storyline italic pb-2">
                              {page.subtitle2}
                            </div>
                          )}
                          {page.image && <img src={page.image} alt="story" />}
                          {page.content && (
                            <div
                              className="story"
                              dangerouslySetInnerHTML={{ __html: page.content }}
                            />
                          )}
                          {page.content2 && (
                            <div
                              className="story"
                              dangerouslySetInnerHTML={{
                                __html: page.content2,
                              }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="demoPage bg-white shadow-xl">
                      <img
                        src="/assets/about/story/backcover.webp"
                        alt="book cover"
                        className="object-cover w-[380px] h-[550px] sm:w-[450px] sm:h-[500px]"
                      />
                    </div>
                  </HTMLFlipBook>
                </Suspense>
                <div className="flex sm:hidden gap-20 mt-8 z-30 relative ">
                  <button
                    onClick={() => prevPage(firstBookRef)}
                    className="w-8 h-8 cursor-pointer capitalize gap-3 rounded-full flex items-center justify-center"
                  >
                    <img
                      src="./assets/right-arrow.png"
                      alt="Previous"
                      className="h-5 w-5 rotate-180"
                    />{" "}
                  </button>

                  <button
                    onClick={() => nextPage(firstBookRef)}
                    className="w-8 h-8 gap-3 cursor-pointer capitalize rounded-full flex items-center justify-center"
                  >
                    <img
                      src="./assets/right-arrow.png"
                      alt="Next"
                      className="h-5 w-5"
                    />
                  </button>
                </div>
              </div>
            )}

            {activeTab === "tab2" && (
              <div className="w-full relative transition-all duration-150 flex flex-col items-center sm:items-start">
                <div className="startHeading hidden sm:block absolute uppercase text-xl max-w-[30%] left-16 top-[25%] leading-10 mb-5 text-red-800 tracking-widest text-center font-sangbleu">
                  We do not build to impress; we build to endure.
                </div>
                <div className="endHeading hidden sm:block absolute uppercase text-xl max-w-[30%] right-46 top-[25%] leading-10 mb-5 text-red-800 tracking-widest text-center font-sangbleu">
                  Our promise is permanence, our gift is legacy.
                </div>
                <Suspense fallback={"Loading..."}>
                  <HTMLFlipBook
                    key={bookKey}
                    width={dimensions.width}
                    height={dimensions.height}
                    startPage={1}
                    showCover={true}
                    ref={secondBookRef}
                    className="no-shadow"
                    drawShadow={false}
                    useMouseEvents={true}
                  >
                    {/* Cover */}
                    <div className="demoPage bg-white shadow-xl">
                      <img
                        src="/assets/about/story/manifastoboocover.webp"
                        alt="book cover"
                        className="object-cover w-[380px] h-[550px] sm:w-[450px] sm:h-[500px]"
                      />
                    </div>

                    {Array.from({
                      length: Math.ceil(tab2points.length / 7),
                    }).map((_, pageIndex) => (
                      <div
                        key={pageIndex}
                        className="demoPage bg-white px-12 py-20 shadow-xl relative"
                      >
                        <img
                          src="/assets/about/story/bookbg.webp"
                          alt=""
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                        <div className="flex relative flex-col justify-center items-center w-full h-full gap-2">
                          {pageIndex === 0 && (
                            <div className="heading py-5 uppercase  text-red-800 tracking-widest text-center font-sangbleu text-2xl">
                              Brand Manifesto
                            </div>
                          )}

                          {tab2points
                            .slice(pageIndex * 7, (pageIndex + 1) * 7)
                            .map((point, i) => (
                              <div
                                key={i}
                                className="storyline flex gap-2 items-center text-center text-[14px] leading-relaxed py-1"
                              >
                                {/* <GiJusticeStar
                                    className="text-[#9b2c2c] min-w-[16px] min-h-[16px] mt-[2px]"
                                    size={16}
                                  /> */}
                                <span>{point}</span>
                              </div>
                            ))}

                          {pageIndex === Math.floor(tab2points.length / 7) && (
                            <div className="story text-center text-[14px] mt-2">
                              <strong>
                                Anant Raj. <br />A Brand Built with Time
                              </strong>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="demoPage bg-white shadow-xl">
                      <img
                        src="/assets/about/story/backcover.webp"
                        alt="book cover"
                        className="object-cover w-[380px] h-[550px] sm:w-[450px] sm:h-[500px]"
                      />
                    </div>
                  </HTMLFlipBook>
                </Suspense>
                <div className="flex sm:hidden gap-20 mt-8 z-30 relative">
                  <button
                    onClick={() => prevPage(secondBookRef)}
                    className="w-8 h-8 cursor-pointer capitalize gap-3 rounded-full flex items-center justify-center"
                  >
                    <img
                      src="./assets/right-arrow.png"
                      alt="Previous"
                      className="h-5 w-5 rotate-180"
                    />{" "}
                  </button>

                  <button
                    onClick={() => nextPage(secondBookRef)}
                    className="w-8 h-8 gap-3 cursor-pointer capitalize rounded-full flex items-center justify-center"
                  >
                    <img
                      src="./assets/right-arrow.png"
                      alt="Next"
                      className="h-5 w-5"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="hidden sm:block tabs  col-span-12 sm:col-span-2">
            {/* Tab 1 */}
            <div className="flex flex-col  justify-between w-full h-full">
              <div>
                <div
                  className={`tab1 py-3 relative transition-all text-end flex justify-between items-center  duration-200 cursor-pointer ${
                    activeTab === "tab1" ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActiveTab("tab1")}
                >
                  <div
                    className={`h-[1px] absolute -left-[70px] mx-auto w-20 transition-all duration-200 bg-black ${
                      activeTab === "tab1" ? "visible" : "invisible"
                    }`}
                  ></div>
                  <h3 className="uppercase text-primaryblue tracking-wider flex justify-end w-full">
                    our brand story
                  </h3>
                </div>

                {/* Tab 2 */}
                <div
                  className={`tab2 py-3 relative flex items-center justify-between text-end transition-all duration-200 cursor-pointer ${
                    activeTab === "tab2" ? "opacity-100 " : "opacity-50"
                  }`}
                  onClick={() => setActiveTab("tab2")}
                >
                  <div
                    className={`h-[1px] absolute -left-[70px] mx-auto w-20  transition-all duration-200 bg-black ${
                      activeTab === "tab2" ? "visible" : "invisible"
                    }`}
                  ></div>
                  <h3 className="uppercase text-primaryblue tracking-wider flex mr-5 justify-end w-full ">
                    our manifesto
                  </h3>
                </div>
              </div>

              {/* Navigation Buttons for First Book */}
              <div className="hidden sm:flex gap-5 justify-center mr-7 mb-[200px] relative">
                <button
                  onClick={() =>
                    prevPage(
                      activeTab === "tab1" ? firstBookRef : secondBookRef
                    )
                  }
                  className="w-8 h-8 cursor-pointer capitalize gap-3 rounded-full flex items-center justify-center "
                >
                  <img
                    src="./assets/right-arrow.png"
                    alt="Previous"
                    className="h-5 w-5 rotate-180"
                  />{" "}
                </button>
                <button
                  onClick={() =>
                    nextPage(
                      activeTab === "tab1" ? firstBookRef : secondBookRef
                    )
                  }
                  className="w-8 h-8 gap-3 cursor-pointer capitalize rounded-full flex items-center justify-center "
                >
                  <img
                    src="./assets/right-arrow.png"
                    alt="Next"
                    className="h-5 w-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/pattern-bg.png"
        alt="pattern-bg"
        className="h-[70px] absolute left-0 bottom-0 w-full object-cover"
      />
    </section>
  );
};

export default OurStory;
