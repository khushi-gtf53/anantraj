"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonHeading from "../../common/CommonHeading";
import './amenities.css';

const am_points = [
  "Club house",
  "Green Areas",
  "Parks",
  "Kids Play Area",
  "Wide Roads",
  "Gated Community",
  "Security"
];

const TownshipAmenities = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pinning and animation for each `.single_am` element
    gsap.utils.toArray('.single_am').forEach((section, index) => {
      const title = section.querySelector('h4');
      const image = section.querySelector('img');
      const allImages = document.querySelectorAll('.single_am img'); // All images in the section

      // Get the height of the section for dynamic centering
      const sectionHeight = section.offsetHeight;

      // Set initial opacity for all images to 0 when the page loads
      gsap.set(allImages, { opacity: 0 });

      // Image fade-in effect for current image (when section enters view)
      gsap.fromTo(
        image,
        {
          opacity: 0, // Initially hidden
        },
        {
          scrollTrigger: {
            trigger: section,
            start: `top+=${sectionHeight / 2} center`, // Image starts fading in after scroll (dynamic offset)
            end: 'bottom center', // Pin the section and keep it active until the bottom reaches center
            scrub: true, // Smooth scroll-based animation
            pin: true, // Pin the section while it's in view
            markers: false, // Set to true if you want to debug
          },
          opacity: 1, // Fade the current image in
        }
      );

      // Fade out the previous image once the new image starts fading in
      // if (index > 0) {
      //   gsap.fromTo(
      //     allImages[index - 1], // The previous image (if any)
      //     {
      //       opacity: 1, // Initially visible
      //     },
      //     {
      //       scrollTrigger: {
      //         trigger: section,
      //         start: `top+=${sectionHeight / 2} center`, // Start fading out when the current section starts appearing
      //         end: 'bottom+=100px center', // Fades out as the current section continues scrolling
      //         scrub: true, // Smooth scroll-based animation
      //         markers: false, // Set to true if you want to debug
      //       },
      //       opacity: 0, // Fade out the previous image
      //     }
      //   );
      // }

      // Title color change effect (separate from pinning)
      gsap.fromTo(
        title,
        {
          color: 'black', // Initial color
        },
        {
          scrollTrigger: {
            trigger: section,
            start: `top+=${sectionHeight / 2} center`, // Title color change happens when section is centered
            end: 'bottom center', // Keep color change until the section scrolls out
            scrub: true,
            pin: false, // Ensure the title color change does not interfere with the pin
            markers: false, // Set to true if you want to debug
          },
          color: 'white', // Change color to white as the image fades in
        }
      );
    });
  }, []);

  return (
    <div className='township_amenities_section relative py-[100px] bg-[#FBF6F6]'>
      <div className="container">
        <CommonHeading customClass="mx-auto lg:max-w-[600px] text-center">
          Stunning Luxury Prime Residences, Designed For Life
        </CommonHeading>
        <ul className="flex points justify-center items-center mt-[50px] mb-[100px]">
          {am_points.map((item, index) => (
            <div key={index}>
              <li className="tracking-[1px]">{item}</li>
              {index !== am_points.length - 1 && <span className="divider"></span>}
            </div>
          ))}
        </ul>

        <div className="am_content">
          {am_points.map((item, index) => (
            <div className="single_am max-w-[50%] mx-auto relative" key={index}>
              <img 
                src={`assets/township/amenities/clubhouse.jpg`} 
                alt={`${item} image`} 
                className="img-fluid w-full" 
              />
              <h4 className="title absolute font-sangbleu text-[40px] top-[50%] left-[50%] translate-[-50%]">
                {item}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TownshipAmenities;
