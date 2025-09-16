"use client";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { HiMiniStar } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoTriangleSharp } from "react-icons/io5";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useState } from 'react';

const testimonialsData = [
    {
        name: "saurabh sheti",
        image: "/assets/about/testimonials/1.png",
        review: "Anant Raj Limited Palmspring is a state-of-the-art project with top-notch amenities, fast-paced construction, and exceptional quality. Supportive staff and well-organized site visits make it a truly commendable experience.",
    },
    {
        name: "saurabh sheti",
        image: "/assets/about/testimonials/1.png",
        review: " Palmspring is a state-of-the-art project with top-notch amenities, fast-paced construction, and exceptional quality. Supportive staff and well-organized site visits make it a truly commendable experience.",
    },
    {
        name: "saurabh sheti",
        image: "/assets/about/testimonials/1.png",
        review: "Anant Raj Limited Palmspring is a state-of-the-art project with top-notch amenities, fast-paced construction, and exceptional quality. Supportive staff and well-organized site visits make it a truly commendable experience.",
    },
    {
        name: "saurabh sheti",
        image: "/assets/about/testimonials/1.png",
        review: "Anant Raj Limited Palmspring is a state-of-the-art project with top-notch amenities, fast-paced construction, and exceptional quality. Supportive staff and well-organized site visits make it a truly commendable experience.",
    },
    {
        name: "saurabh sheti",
        image: "/assets/about/testimonials/1.png",
        review: "Anant Raj Limited Palmspring is a state-of-the-art project with top-notch amenities, fast-paced construction, and exceptional quality. Supportive staff and well-organized site visits make it a truly commendable experience.",
    },
    {
        name: "saurabh sheti",
        image: "/assets/about/testimonials/1.png",
        review: "Anant Raj Limited Palmspring is a state-of-the-art project with top-notch amenities, fast-paced construction, and exceptional quality. Supportive staff and well-organized site visits make it a truly commendable experience.",
    },
    {
        name: "saurabh sheti",
        image: "/assets/about/testimonials/1.png",
        review: "Anant Raj Limited Palmspring is a state-of-the-art project with top-notch amenities, fast-paced construction, and exceptional quality. Supportive staff and well-organized site visits make it a truly commendable experience.",
    },
    {
        name: "saurabh sheti",
        image: "/assets/about/testimonials/1.png",
        review: "Anant Raj Limited Palmspring is a state-of-the-art project with top-notch amenities, fast-paced construction, and exceptional quality. Supportive staff and well-organized site visits make it a truly commendable experience.",
    },
    {
        name: "saurabh sheti",
        image: "/assets/about/testimonials/1.png",
        review: "Anant Raj Limited Palmspring is a state-of-the-art project with top-notch amenities, fast-paced construction, and exceptional quality. Supportive staff and well-organized site visits make it a truly commendable experience.",
    },
   
];

const AboutTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <section id="testimonials" className="about_testimonials w-full h-screen px-[20px] py-[40px] lg:py-[100px]">
            <div className="flex justify-center items-center">
                <div className="startHeading text-primaryred font-sangbleu mb-[40px] uppercase lg:text-left text-center tracking-[2px] leading-[30px] lg:leading-[40px] text-[12.5px] lg:text-[20px]">
                    real stories, real satisfaction testimonials that build trust in real estate
                </div>
            </div>

            <div className="testimonial_review mb-10 flex flex-col min-h-[250px] justify-center items-center gap-10 sm:max-w-[45%] mx-auto">
                <BiSolidQuoteAltLeft className="text-[#9b2c2c] min-w-[40px] min-h-[40px]" />
                <div className="review text-center">
                    {testimonialsData[activeIndex].review}
                </div>
            </div>

            <div className="slider max-w-[95%] mx-auto  border-t border-black/80 relative">
                <div className="activeflag">
                    <IoTriangleSharp color="#9b2c2c" className="rotate-180 text-3xl absolute mt-[-3px] top-0 left-[22%] sm:left-[50%]" />
                </div>

                <Swiper
                    modules={[Navigation]}
                    // slidesPerView={5}
                    centeredSlides={true}
                    spaceBetween={30}
                    loop={true}
                    loopedslides={testimonialsData.length}
                    watchSlidesProgress={true}
                    effect="fade"
                    watchslidesvisibility="true"
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    initialSlide={2}
                    className="mt-16"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {testimonialsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center h-full">
                                <div className="flex gap-5 items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className={`w-[100px] h-[100px] rounded-full object-cover transition-all duration-300 ${activeIndex === index ? "opacity-100" : "opacity-40"}`}
                                    />
                                    {activeIndex === index && (
                                        <div className="about_person w-full">
                                            <div className="name uppercase w-full font-bold pb-3 tracking-wider">{item.name}</div>                                          
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


                <div className="testimonial_slider_navigation w-full flex justify-center gap-5 mt-5">
                    <div className="prev text-2xl text-gray-400 cursor-pointer">
                        <IoIosArrowBack />
                    </div>
                    <div className="next text-2xl text-gray-400 cursor-pointer">
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTestimonials;
