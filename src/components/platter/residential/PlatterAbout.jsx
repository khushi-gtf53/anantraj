"use client";

import CommonHeroSec from "../../common/CommonHeroSec";

const PlatterAbout = ({ tabs, activeTab, setActiveTab }) => {
  const Obj = {
    title: "Residential",
    heading: "Residential",
    subtitle: (
      <>
        Anant Raj Limited offers a diverse portfolio of luxury residential properties{" "}
        <span className="lg:block hidden"></span>designed to cater to the evolving needs of modern homeowners.
      </>
    ),
    imgUrl: "/assets/platter/residential/about.png",
    linkTo: "discover",
    tabs: tabs.map((tab) => ({
      tabname: tab.label, // Map `label` to `tabname` for CommonHeroSec
      tablink: tab.key,   // Map `key` to `tablink` to match accordion IDs
    })),
  };

  return <CommonHeroSec ObjData={Obj} activeTab={activeTab} setActiveTab={setActiveTab} />;
};

export default PlatterAbout;