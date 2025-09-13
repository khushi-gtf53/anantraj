"use client";

import { useState } from "react";
import CommonHeroSec from "../common/CommonHeroSec";


const CsrAbout = () => {
     const [activeTab, setActiveTab] = useState("overview"); 
    const Obj = {
        title: "CSR",
        heading: "CSR",
        subtitle: <>
            Monica Sarin Foundation has been instrumental in carrying out our organization's
            CSR initiatives to help create an impact in our society.
        </>,
        imgUrl: "/assets/csr/about.webp",
        linkTo: "discover",
        tabs: [
            { tabname: "Overview", tablink: "overview" },
            { tabname: "Education", tablink: "education" },
            { tabname: "Employment", tablink: "employment" },
            { tabname: "Rural Development", tablink: "ruraldevelopment" },
            { tabname: "Gallery", tablink: "gallery" },
        ]
    }
    return (
        <CommonHeroSec ObjData={Obj}  activeTab={activeTab} setActiveTab={setActiveTab}  />
    )
}

export default CsrAbout