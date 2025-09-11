import GalleryAbout from '@/src/components/gallery/GalleryAbout'
import Projects from '@/src/components/gallery/Projects'
import Image from 'next/image';
import React from 'react'

const page = () => {
    const tabs = [
        {
            key: "allprojects",
            label: "All Projects Images",
            projects: {
                Residential: [
                    "/assets/platter/residential/completed/1.webp",
                    "/assets/platter/residential/completed/2.webp",
                    "/assets/platter/residential/completed/3.webp",
                    "/assets/platter/residential/completed/1.webp",
                    "/assets/platter/residential/completed/2.webp",
                    "/assets/platter/residential/completed/3.webp",
                ],
                Commercial: [
                    "/assets/platter/commercial/completed/1.webp",
                    "/assets/platter/commercial/completed/2.webp",
                ],
                Hospitality: [],
                "Data Centers": [],
            },
        },
        {
            key: "underconstruction",
            label: "All Under Construction Images",
            projects: {
                "2025 Images": [
                    "/assets/platter/residential/ongoing/1.webp",
                    "/assets/platter/residential/ongoing/2.webp",
                ],
                "2024 Images": [],
                "2023 Images": [],
                "2022 Images": [],
            },
        },
        {
            key: "award-event",
            label: "Awards Event Images",
            projects: {
                "2025 Images": [
                    "/assets/platter/residential/ongoing/1.webp",
                    "/assets/platter/residential/ongoing/2.webp",
                ],
                "2024 Images": [],
                "2023 Images": [],
                "2022 Images": []
            },
        },
        {
            key: "csr-event",
            label: "CSR Event Images",
            projects: {
                "2025 Images": [
                    "/assets/platter/residential/ongoing/1.webp",
                    "/assets/platter/residential/ongoing/2.webp",
                ],
                "2024 Images": [],
                "2023 Images": [],
                "2022 Images": [],
            },
        },
    ];

    return (
        <>
            <div className='bg-[#FBF6F6] relative w-full'>
                <GalleryAbout />
                <Projects tabs={tabs} />
                <Image
                        src="/assets/pattern-bg.png"
                        alt="pattern background"
                        width={1920}
                        height={70}
                        className="h-[70px] w-full object-cover"
                        priority={false}
                      />
            </div>
        </>
    )
}

export default page