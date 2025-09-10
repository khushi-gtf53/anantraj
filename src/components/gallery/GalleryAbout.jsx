import React from 'react'
import CommonHeroSec from '../common/CommonHeroSec'

const GalleryAbout = () => {
    const Obj = {
        title: "Gallery",
        heading: "Gallery",
        subtitle: <>
            Explore our journey through images – from landmark constructions to vibrant{" "}
            <span className="lg:block hidden"></span>events, CSR initiatives, and world-class residential & commercial spaces.
        </>,
        imgUrl: "/assets/gallery/about.webp",
        linkTo: "discover",
        tabs: [
            { tabname: "All Projects", tablink: "allprojects" },
            { tabname: "Under Construction", tablink: "underconstruction" },
            { tabname: "Event", tablink: "award-event" },
        ]
    }
    return (
        <CommonHeroSec ObjData={Obj} />
    )
}

export default GalleryAbout