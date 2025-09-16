"use client"
import React, { useRef, useEffect, useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import gsap from 'gsap';
import BlogCard from './blogCard';
import CommonHeading from '../common/CommonHeading';
import Pagination from '../common/Pagination';



export default function BlogDataMain({ blogsData }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedSection, setExpandedSection] = useState('latest');

    const latestRef = useRef(null);
    const oldRef = useRef(null);

    useEffect(() => {
        gsap.set(latestRef.current, { height: "auto", opacity: 1, display: "block" });
        gsap.set(oldRef.current, { height: 0, opacity: 0, display: "none" });
    }, []);

    const toggleSection = (section) => {
        if (section === expandedSection) return;

        if (section === 'latest') {
            // close old
            gsap.to(oldRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.set(oldRef.current, { display: "none" });
                }
            });

            // open latest
            gsap.set(latestRef.current, { display: "block" });
            gsap.to(latestRef.current, {
                height: "auto",
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut"
            });

            setExpandedSection('latest');
        } else {
            // close latest
            gsap.to(latestRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.set(latestRef.current, { display: "none" });
                }
            });

            // open old
            gsap.set(oldRef.current, { display: "block" });
            gsap.to(oldRef.current, {
                height: "auto",
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut"
            });

            setExpandedSection('old');
        }
    };

    return (
        <div className='max-w-[1600px] m-auto blogs_container lg:pb-[100px] pb-[60px] lg:px-[100px] px-[15px]' id='discover-blogs'>
            <div className='lg:pt-[80px] pt-[60px]'>

                <CommonHeading>Uncover Innovative Insights and Spark Your Imagination with Our Blog!</CommonHeading>

                {/* Latest Blogs */}
                {blogsData?.latest.length > 0 && (
                    <div className='latestBlogs pt-12 pb-[80px]' id='latest'>
                        <div className='flex__heading flex justify-between items-center pb-8 cursor-pointer'
                            onClick={() => toggleSection('latest')}
                        >
                            <h1 className=" font-sangbleu uppercase text-left tracking-[2px] leading-[30px] lg:leading-[40px] text-[12.5px] lg:text-[20px]">Latest Blogs</h1>
                            <span className=' inline-block lg:w-[80%] w-[55%] h-[1px] bg-gray-400'></span>
                            <span className='text-2xl'>{expandedSection === 'latest' ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                        </div>
                        {/*  */}
                        <div ref={latestRef} className="overflow-hidden">
                            <div className='cards__wrapper flex flex-wrap gap-y-8  justify-between'>
                                {blogsData?.latest?.map((item, index) => (
                                    <div className='lg:w-[48%] w-full' key={index}>
                                        <BlogCard blogsData={item} />
                                    </div>
                                ))}
                            </div>
                            <div className='flex lg:justify-end lg:pt-0 pt-8'>
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={4}
                                    onPageChange={(page) => setCurrentPage(page)}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Old Blogs */}
                {blogsData?.old.length > 0 && (
                    <div className='oldBlogs' id='old'>
                        <div className='flex__heading flex justify-between items-center pb-8 cursor-pointer'
                            onClick={() => toggleSection('old')}
                        >
                            <h1 className=" font-sangbleu uppercase text-left tracking-[2px] leading-[30px] lg:leading-[40px] text-[12.5px] lg:text-[20px]">Old Blogs</h1>
                            <span className=' inline-block lg:w-[80%] w-[55%] h-[1px] bg-gray-400'></span>
                            <span className='text-2xl'>{expandedSection === 'old' ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                        </div>
                        <div ref={oldRef} className="overflow-hidden">
                            <div className='cards__wrapper flex flex-wrap gap-y-8 justify-between'>
                                {blogsData?.old?.map((item, index) => (
                                    <div className='lg:w-[48%] w-full' key={index}>
                                        <BlogCard blogsData={item} />
                                    </div>
                                ))}
                            </div>
                            <div className='flex lg:justify-end lg:pt-0 pt-8'>
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={4}
                                    onPageChange={(page) => setCurrentPage(page)}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
