'use client'

import React, { useEffect, useRef, useState } from 'react'
// import ReportsSection from './ReportsSection'
// import CommonHeroSec from '../common/CommonHeroSec';
import { gsap } from "gsap";
import CommonHeroSec from '@/src/website/components/common/CommonHeroSec';
import ReportsSection from './ReportsSection';


const Obj = {
    title: "Investors",
    heading: "Investors",
    subtitle: "Stay updated with transparent reports and disclosures, reflecting our commitment to investors and sustainable growth.",
    imgUrl: "/assets/blogs/blog.webp",
    linkTo: "discover-investors",
    tabs: [
        { tabname: "Reports", tablink: "1" },
        { tabname: "Corporate Governance", tablink: "2" },
        { tabname: "Shareholder Information", tablink: "3" },
        { tabname: "Announcements", tablink: "4" },
        { tabname: "SEBI LODR Regulation", tablink: "5" },
    ]
}

const data = [
    {
        id: 1,
        title: "Reports",
        content: [
            "Corporate Governance Reports",
            "Business Responsibility Reports",
            "CSR Annual Action Plan",
            "Certificate Under Reg.7(3) And Reg.40(10)",
        ],
    },

    {
        id: 2,
        title: "Corporate Governance",
        content: [
            "Corporate Governance Reports",
            "Business Responsibility Reports",
            "CSR Annual Action Plan",
            "Certificate Under Reg.7(3) And Reg.40(10)",
        ],
    },

    {
        id: 3,
        title: "Shareholder Information",
        content: [
            "Corporate Governance Reports",
            "Business Responsibility Reports",
            "CSR Annual Action Plan",
            "Certificate Under Reg.7(3) And Reg.40(10)",
        ],
    },

    {
        id: 4,
        title: "Announcements",
        content: [
            "Corporate Governance Reports",
            "Business Responsibility Reports",
            "CSR Annual Action Plan",
            "Certificate Under Reg.7(3) And Reg.40(10)",
        ],
    },

    {
        id: 5,
        title: "Disclosures Under Regulation 46 of SEBI (LODR) Regulations, 2015",
        content: [
            "Corporate Governance Reports",
            "Business Responsibility Reports",
            "CSR Annual Action Plan",
            "Certificate Under Reg.7(3) And Reg.40(10)",
        ],
    },
];

const reportFiles = [
    { id: 1, name: "Corporate Governance Report 2023-2024" },
    { id: 2, name: "Corporate Governance Report 2022-2023" },
    { id: 3, name: "Corporate Governance Report 2021-2022" },
    { id: 4, name: "Corporate Governance Report 2020-2021" },
];

export default function Investors() {

    const [openModal, setOpenModal] = useState(false);
    const [activeReport, setActiveReport] = useState(null);
    const [openAccordion, setOpenAccordion] = useState(1);
    const contentRefs = useRef({});



    useEffect(() => {
        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") setOpenModal(false);
        })
    }, [openModal])

    const toggleAccordion = (id) => {
        setOpenAccordion((prev) => (prev === id ? null : id));
    };


    useEffect(() => {
        Object.keys(contentRefs.current).forEach((key) => {
            const el = contentRefs.current[key];
            if (parseInt(key) === openAccordion) {
                gsap.to(el, {
                    height: "auto",
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                });
            } else {
                gsap.to(el, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.inOut",
                });
            }
        });
    }, [openAccordion]);


    return (
        <>
            <CommonHeroSec ObjData={Obj} />
            <ReportsSection
                data={data}
                reportFiles={reportFiles}
                openModal={openModal}
                setOpenModal={setOpenModal}
                activeReport={activeReport}
                setActiveReport={setActiveReport}
                setOpenAccordion={setOpenAccordion}
                toggleAccordion={toggleAccordion}
                contentRefs={contentRefs}
            />
        </>
    )
}
