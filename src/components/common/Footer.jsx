"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isExploreVisible, setIsExploreVisible] = useState(false);
  const exploreLinkRef = useRef(null);

  const handleClickOnExplore = () => {
    setIsExploreOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!exploreLinkRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setIsExploreVisible(() => entries[0].isIntersecting);
      },
      {
        root: null, // Use viewport as root
        rootMargin: "0px", // No extra margin
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(exploreLinkRef.current);

    return () => {
      if (exploreLinkRef.current) {
        observer.unobserve(exploreLinkRef.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log(isExploreVisible, "isExploreBisible state");
  }, [isExploreVisible]);

  return (
    <footer>     

      <div ref={exploreLinkRef} className="px-[20px] lg:px-[100px] pb-[70px]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="basis-[40%] lg:basis-[80%] border-b-[1px] border-solid border-black"></div>
          <button
            className="uppercase cursor-pointer basis-[60%] lg:basis-[20%] justify-end tracking-[1px] text-[13px] lg:text-[14px] flex items-center"
            onClick={handleClickOnExplore}
          >
            Explore More Links
            <img
              src="./assets/down-arrow.png"
              className={`h-[18px] ml-[6px] object-cover ${
                isExploreOpen ? "rotate-[180deg]" : ""
              }`}
              alt="down-arrow"
            />
          </button>
        </div>

        <div className="mt-10 ">
          <div className="text-[13px]  hidden lg:flex justify-between  lg:text-[16px]">
            <div>
              {" "}
              <div className="flex  flex-col space-y-2">
                <span>Copyright © 2025</span>
                <span>Anant Raj Limited</span>
              </div>
              {isExploreOpen && (
                <div className="flex mt-[20px] flex-col space-y-2">
                  <Link href="blogs">
                    <span className="mr-2">&gt;</span>
                    Blogs
                  </Link>
                  <Link href="contactus">
                    <span className="mr-2">&gt;</span>
                    Contact us
                  </Link>
                </div>
              )}
              {isExploreOpen && (
                <div className="flex  mt-[20px] flex-col space-y-2">
                  <Link href="careers">
                    <span className="mr-2">&gt;</span>
                    Careers
                  </Link>
                </div>
              )}
            </div>
            <div>
              <div className="flex  flex-col space-y-2">
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Residential
                </Link>
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Commercial
                </Link>
              </div>
              {isExploreOpen && (
                <div>
                  {" "}
                  {isExploreOpen && (
                    <div className="flex  mt-[20px] flex-col space-y-2">
                      <Link href="csr">
                        <span className="mr-2">&gt;</span>
                        CSR
                      </Link>
                    </div>
                  )}
                  {isExploreOpen && (
                    <div className="flex  mt-[20px] flex-col space-y-2">
                      <Link href="gallery">
                        <span className="mr-2">&gt;</span>
                        Gallery
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div>
              {" "}
              <div className="flex  flex-col space-y-2">
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Data Centers
                </Link>
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Hospitality
                </Link>
              </div>
              {isExploreOpen && (
                <div className="flex mt-[20px] flex-col space-y-2">
                  {/* <Link href="">
                    <span className="mr-2">&gt;</span>
                    Tax Benefits
                  </Link> */}
                </div>
              )}
            </div>
            <div>
              <div className="flex  flex-col space-y-2">
                <Link href="about">
                  <span className="mr-2">&gt;</span>
                  About Us
                </Link>
                <Link href="investors">
                  <span className="mr-2">&gt;</span>
                  Investors
                </Link>
              </div>
              {/* {isExploreOpen && (
                <div className="flex mt-[20px] flex-col space-y-2">
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    NRI Corner
                  </Link>
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    NRI Investors
                  </Link>
                </div>
              )} */}
            </div>
          </div>
          {/* mobile links */}
          <div className="text-[12px]  lg:hidden flex justify-between  lg:text-[16px]">
            <div>
              <div className="flex  flex-col space-y-2">
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Blogs
                </Link>
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Contact us
                </Link>
              </div>

              {isExploreOpen && (
                <div className="flex  mt-[20px] flex-col space-y-2">
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    Career
                  </Link>
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    CSR
                  </Link>
                </div>
              )}
              {isExploreOpen && (
                <div className="flex  mt-[20px] flex-col space-y-2">
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    Gallery
                  </Link>
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    Testimonials
                  </Link>
                </div>
              )}
            </div>
            <div>
              <div className="flex  flex-col space-y-2">
                <Link href="projects">
                  <span className="mr-2">&gt;</span>
                  Residential
                </Link>
                <Link href="projects">
                  <span className="mr-2">&gt;</span>
                  Commercial
                </Link>
              </div>

              <div>
                {" "}
                {isExploreOpen && (
                  <div className="flex  mt-[20px] flex-col space-y-2">
                    <Link href="">
                      <span className="mr-2">&gt;</span>
                      EMI Calculator
                    </Link>
                  </div>
                )}
                {isExploreOpen && (
                  <div className="flex  mt-[20px] flex-col space-y-2">
                    <Link href="">
                      <span className="mr-2">&gt;</span>
                      NRI Investors
                    </Link>
                    <Link href="">
                      <span className="mr-2">&gt;</span>
                      NRI Corner
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div>
              {" "}
              <div className="flex  flex-col space-y-2">
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Data Centers
                </Link>
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Hospitality
                </Link>
              </div>
              {isExploreOpen && (
                <div className="flex mt-[20px] flex-col space-y-2">
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    Home Loans
                  </Link>
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    Tax Benefits
                  </Link>
                </div>
              )}
              {isExploreOpen && (
                <div className="flex mt-[20px] flex-col space-y-2">
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    Investors
                  </Link>
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    About us
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FBF6F6] px-[20px] lg:px-[100px] pt-6 pb-6 lg:pb-6">
        {/* Main Content Section */}
        <div>
          <div className="flex  flex-col lg:flex-row items-center justify-between space-y-[35px] lg:space-y-0">
            {/* Left Section - Logo */}
            <div className="flex-shrink-0">
              <img
                src="./assets/footer-logo-1.png"
                className="h-[60px] lg:h-[100px] object-contain"
                alt="logo"
              />
            </div>
            <div className="lg:hidden flex-shrink-0">
              <img
                src="./assets/img-1.png"
                alt="Portrait"
                className="w-full h-[130px] lg:h-[157px] object-contain filter grayscale"
              />
            </div>

            {/* Center Section - Quote */}
            <div className="flex-1 text-center lg:px-8">
              <blockquote>
                <p className="text-[16px]  font-[400] tracking-wide leading-relaxed">
                  " WE PLEDGE TO UPHOLD AND CONTINUE
                </p>
                <p className="text-[16px] font-bold tracking-wide leading-relaxed mt-1">
                  YOUR LEGACY IN THE SAME SPIRIT "
                </p>
              </blockquote>
            </div>

            {/* Right Section - Portrait */}
            <div className="hidden  lg:block flex-shrink-0">
              <img
                src="./assets/img-1.png"
                alt="Portrait"
                className="w-full h-[130px] lg:h-[157px] object-contain filter grayscale"
              />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-5">
          <hr className="border-black border-solid border-t-[1px]" />
        </div>

        {/* Bottom Section */}

        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Left - Phone Number */}
          <div className="flex-shrink-0 uppercase">
            <span className="font-medium text-sm tracking-wide">
              <a href="tel:+911143034400" className="hover:underline">
                +91-11-43034400
              </a>
              <a
                href="tel:+918929800666"
                className="inline-block ml-[18px] hover:underline"
              >
                +91 89298 00666
              </a>
            </span>
          </div>

          {/* Right - Social Media Icons */}
          <div className="flex space-x-6">
            {/* Facebook */}
            <Link href="https://www.facebook.com/AnantRajLimited2020">
              <img
                src="./assets/facebook.png"
                className="object-contain h-[24px]"
                alt="facebook"
              />
            </Link>

            {/* Instagram */}
            <Link href="https://www.instagram.com/anantrajlimited/?hl=en">
              <img
                src="./assets/instagram.png"
                className="object-contain h-[24px]"
                alt="ig"
              />
            </Link>

            <Link href="https://x.com/anantrajlimited">
              {/* Twitter/X */}
              <img
                src="./assets/x.png"
                className="object-contain h-[24px]"
                alt="ig"
              />
            </Link>

            {/* LinkedIn */}
            <Link href="https://www.linkedin.com/company/anantrajltd/?originalSubdomain=in">
              <img
                src="./assets/linkedin.png"
                className="object-contain h-[24px]"
                alt="linkedin"
              />
            </Link>

            <Link href="https://www.youtube.com/@ARLGurugram">
              {/* YouTube */}
              <img
                src="./assets/youtube.png"
                className="object-contain h-[24px]"
                alt="linkedin"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex uppercase bg-white flex-col px-[20px] lg:px-[100px] text-[12px] space-y-3 lg:space-y-0 lg:flex-row justify-between items-center  py-[10px]">
        <p className="lg:hidden  text-[16px] tracking-[1px]">
          Copyright © 2025 Anant Raj Ltd
        </p>
        <p className="tracking-[1px] text-[12px]">
          Crafted by GTF Technologies
        </p>

        <div className="flex text-[12px]">
          <p>
            <span>Privacy Policy </span>
            <span className="mx-[4px]"> |</span>
            <span>Disclaimer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
