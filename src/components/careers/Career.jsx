'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import Image from 'next/image';

import CommonHeroSec from '@/src/components/common/CommonHeroSec';
import CommonHeading from '@/src/components/common/CommonHeading';
import JobList from './JobList';
import CareerForm from './CareerForm';

const Obj = {
    title: "Career",
    heading: "Careers",
    subtitle: "Working at Anant Raj means finding a platform that is filled with countless growth opportunities and unlimited resources to excel in your career.",
    imgUrl: "/assets/careers/careers.webp",
    linkTo: "work-culture",
    tabs: [
        { tabname: "Work Culture", tablink: "work-culture" },
        { tabname: "All Jobs", tablink: "all-jobs" },
        { tabname: "Join Us", tablink: "join-us" }
    ]
}

const careerSlidesData = [
    { img: "/assets/careers/c-1.webp", imgSm: "/assets/careers/c-1.webp", alt: "careers img", title: "careers img" },
    { img: "/assets/careers/c-2.webp", imgSm: "/assets/careers/c-2.webp", alt: "careers img", title: "careers img" },
    { img: "/assets/careers/c-1.webp", imgSm: "/assets/careers/c-1.webp", alt: "careers img", title: "careers img" },
    { img: "/assets/careers/c-2.webp", imgSm: "/assets/careers/c-2.webp", alt: "careers img", title: "careers img" },
]

export default function Career() {
    return (
        <div className='career bg-[#FBF6F6]'>
            <CommonHeroSec ObjData={Obj} />
            <div className='wrapper' id='work-culture'>
                <div className='content pb-6 mb-14 border-b-2 border-gray-400'>
                    <CommonHeading>Why Anant Raj? Building Trust, Crafting Excellence.</CommonHeading>
                    <p className='pt-8 font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[27px]'>
                        Working at Anant Raj means finding a platform that is filled with countless growth opportunities and unlimited resources to excel in your career. We value, appreciate and encourage exceptional, diligent performances while simultaneously creating an environment of compassion, diversity and creative independence. Our work culture reflects the traditional values we have carried with us over the years that indirectly facilitate success and innovation at all levels. We go above and beyond to make sure our team knows they are deeply valued, cherished and admired. It's all of us together that makes this organization a really vibrant place to work at.
                    </p>
                </div>

                <Swiper
                    spaceBetween={50}
                    autoplay={{ delay: 3000 }}
                    loop={careerSlidesData.length > 1}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="carousel-control myCareerlider"
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2, spaceBetween: 60 },
                    }}
                >
                    {careerSlidesData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[250px] md:h-[300px] lg:h-[360px] overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    title={item.title}
                                    fill
                                    className="object-cover w-full h-full"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                                    priority={index === 0}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <JobList />
                <CareerForm />
            </div>
        </div>
    )
}
