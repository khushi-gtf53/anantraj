import React from 'react'
import CommonHeroSec from '../common/CommonHeroSec'

const HeroContactus = () => {

    const Obj = {
        title: "Contact Us",
        heading: "Contact Us",
        subtitle: <p> We’re here to connect—reach out to Anant Raj Limited for inquiries , <span className="lg:block hidden"></span>  collaborations, or project details.</p>,
        imgUrl: "/assets/hero-aboutus.webp",
        linkTo: "discover",
        tabs: [
            { tabname: "Contact Details", tablink: "contactDetails" }
            , { tabname: "Query Form", tablink: "queryForm" }
            , { tabname: "Address", tablink: "address" }
        ]
    }
    return (
        <CommonHeroSec ObjData={Obj} />
    )
}

export default HeroContactus