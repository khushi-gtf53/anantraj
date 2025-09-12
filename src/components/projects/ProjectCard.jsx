import useWindowWidth from '@/src/utils/useWindowWidth'
import React from 'react'
import CategoryText from './CategoryText'
import Image from 'next/image'
import CommonHeading from '../common/CommonHeading'
import Link from 'next/link'

export default function ProjectCard({ item, active }) {
    const { width: windowWidth } = useWindowWidth()

    return (
        <div className="flex justify-between lg:flex-nowrap flex-wrap w-full h-full relative lg:pb-12 lg:py-0 py-4">
            {/* Mobile category */}
            {windowWidth < 767 && (
                <CategoryText category={item.category} title={item.title} active={active} />
            )}
            <figure
                className={`w-full lg:pb-0 pb-4 ${active === item.title ? "lg:w-[50%]" : "lg:w-[100%]"
                    }`}
            >
                <Link href={item.link}>
                <Image
                    src={item.bigImage}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                    alt={item?.alt || item.title}
                />
            </Link>
            </figure>

            {(windowWidth <= 767 || active === item.title) && (
                <div className="lg:w-[50%] lg:p-14 w-full grid self-center lg:gap-y-5">
                    <Link href={item.link}>
                    <CommonHeading customClass="lg:max-w-[100%] max-w-[100%] text-primaryred">
                        {item.title}
                    </CommonHeading>
                    <p className="font-lato text-[14px] text-justify font-[400] tracking-[1px] leading-[27px] lg:pt-0 pt-4">
                        {item.description}
                    </p>
                    </Link>
                </div>
            )}
            {/* Desktop category text */}
            {windowWidth >= 767 && (
                <CategoryText category={item.category} title={item.title} active={active} />
            )}
        </div>
    )
}
