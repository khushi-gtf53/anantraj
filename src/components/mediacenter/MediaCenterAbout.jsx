"use client";
import React from 'react'
import CommonHeroSec from '../common/CommonHeroSec'
import CommonHeading from '../common/CommonHeading';
import CommonPera from '../common/CommonPera';
import OnlineNews from './OnlineNews';
import PressKit from './PressKit';

const MediaCenterAbout = () => {
  const Obj = {
    title: "Media Centre",
    heading: "Media Centre",
    subtitle: <>
      Monica Sarin Foundation has been instrumental in carrying out our{" "}
      <span className="lg:block hidden"></span> organization's CSR initiatives to help create an impact in our society.
    </>,
    imgUrl: "/assets/mediacenter/about.webp",
    linkTo: "discover",
    tabs: [
      { tabname: "Overview", tablink: "overview" },
      { tabname: "Online News", tablink: "news" },
      { tabname: "Press Kit", tablink: "presskit" },
    ]
  }
  return (
    <>
      <CommonHeroSec ObjData={Obj} />
      <section id='discover' className="about" >
        <div className='wrapper'>
          <div className="lg:pb-18 lg:mb-18 pb-8 mb-9 border-b" id='overview'>
            <CommonHeading>making headlines, sharing stories, showcasing impact</CommonHeading>
            <div className='pt-8'>
              <CommonPera>The Media Section is where Anant Raj Limited’s vision comes alive in the spotlight. From press releases to industry features, digital highlights to landmark events, every story reflects our journey of growth, innovation, and impact. Stay connected as we continue to create, transform, and inspire headlines across the real estate landscape.</CommonPera>
            </div>
          </div>
          <OnlineNews />
          <PressKit />
        </div>
      </section>
    </>
  )
}

export default MediaCenterAbout