'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay } from 'swiper/modules';
import BlogCard from '../blogCard';

import 'swiper/css';
import 'swiper/css/navigation';

import { IoIosArrowDown } from 'react-icons/io';

const blogsData = [
    {
        img: '/assets/blogs/blog-1.webp',
        alt: 'blog 1',
        title: 'Anant Raj Manesar: Pioneering Innovation at the Heart of IT Innovation at the Heart of IT ',
        slug: 'blog-1',
        date: '2025-07-29'
    },
    {
        img: '/assets/blogs/blog-2.webp',
        alt: 'blog 1',
        title: 'Township Living Redefined: The Rise of Integrated Communities',
        slug: 'blog-1',
        date: '2025-07-29'
    },
    {
        img: '/assets/blogs/blog-1.webp',
        alt: 'blog 1',
        title: 'Anant Raj Manesar: Pioneering Innovation at the Heart of IT Innovation at the Heart of IT ',
        slug: 'blog-1',
        date: '2025-07-29'
    },
    {
        img: '/assets/blogs/blog-2.webp',
        alt: 'blog 1',
        title: 'Township Living Redefined: The Rise of Integrated Communities',
        slug: 'blog-1',
        date: '2025-07-29'
    },
]


export default function BlogContent() {
    if (!blogsData) return null;

    return (
        <div className='max-w-[1600px] m-auto blogs_container lg:py-[100px] py-[50px] lg:px-[100px] px-[15px]' id='discover-blogs'>
            <div className='blog__detail__head flex justify-between flex-wrap border-b pb-8 mb-8'>
                <h2 className=" font-sangbleu uppercase lg:max-w-[54%]  w-full tracking-[2px] leading-[30px] lg:leading-[40px] text-[13px] lg:text-[20px]">Anant Raj Manesar: Pioneering Innovation at the Heart of IT Development</h2>
                <span className='date font-bold lg:text-[18px] text-[16px]'>2025-07-29</span>
            </div>
            {/* description */}
            <div className='blog__detail__desc pb-14'>
                <p className="font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[27px]">The demand for secure, scalable, and future-ready IT infrastructure is reshaping the real estate landscape across India. At the forefront of this transformation is Anant Raj Manesar- a flagship IT Park that has not only established itself as a hub for technology-led businesses but is now taking bold steps towards becoming a centre for cloud services and data centre development.</p>
                <p className="font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[27px]">The demand for secure, scalable, and future-ready IT infrastructure is reshaping the real estate landscape across India. At the forefront of this transformation is Anant Raj Manesar- a flagship IT Park that has not only established itself as a hub for technology-led businesses but is now taking bold steps towards becoming a centre for cloud services and data centre development.</p>
                <h3 className='font-bold lg:text-[18px] text-[16px] pb-5'>The Evolution of Manesar as a Tech Destination</h3>
                <p className="font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[27px]">Over the past decade, Manesar has evolved from an industrial township into a dynamic extension of Gurugram’s corporate and logistics ecosystem. Its connectivity to NH-48, proximity to Delhi NCR, and availability of large land parcels have made it a magnet for forward-thinking companies across sectors.</p>
                <p className="font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[27px]">Over the past decade, Manesar has evolved from an industrial township into a dynamic extension of Gurugram’s corporate and logistics ecosystem. Its connectivity to NH-48, proximity to Delhi NCR, and availability of large land parcels have made it a magnet for forward-thinking companies across sectors.</p>
                <p className="font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[27px]">Over the past decade, Manesar has evolved from an industrial township into a dynamic extension of Gurugram’s corporate and logistics ecosystem. Its connectivity to NH-48, proximity to Delhi NCR, and availability of large land parcels have made it a magnet for forward-thinking companies across sectors.</p>

                <button className='flex flex-col items-center readmore mx-auto'>
                    <IoIosArrowDown className='lg:text-2xl text-[20px] text-gray-600' />
                    <span className='text-[#263A7F] lg:text-[16px] text-[13px] uppercase font-bold'>Read More</span>
                </button>

            </div>
            {/* suggested / latest blogs */}

            <div className='latest__blogs' id='other-blogs'>
                <h2 className=" font-sangbleu uppercase mb-8 tracking-[2px] leading-[30px] lg:leading-[40px] text-[16px] lg:text-[20px]">Other Blogs</h2>
                <Swiper
                    spaceBetween={50}
                    autoplay={true}
                    loop={true}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="carousel-control myBlogSlider"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 60
                        },
                    }}
                >
                    {
                        blogsData.map((item, index) => {
                            return (
                                < SwiperSlide key={index}>
                                    <BlogCard blogsData={item} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div >
    )
}
