import AboutProject from "@/src/website/components/microsite/AboutProject";
import Amenities from "@/src/website/components/microsite/Amenities";
import Banner from "@/src/website/components/microsite/Banner"
import FloorPlan from "@/src/website/components/microsite/FloorPlan";
import Gallery from "@/src/website/components/microsite/Gallery";
import HighlightsSpecifications from "@/src/website/components/microsite/HighlightsSpecifications";
import LocationAdvantages from "@/src/website/components/microsite/LocationAdvantages";
import ProjectOverview from "@/src/website/components/microsite/ProjectOverview";

const page = () => {
  const bannerslides = [
    "/assets/microsites/estate-residences/banner/1.webp",
    "/assets/microsites/estate-residences/banner/2.webp",
    "/assets/microsites/estate-residences/banner/3.webp",
    "/assets/microsites/estate-residences/banner/4.webp",
    "/assets/microsites/estate-residences/banner/5.webp",
    "/assets/microsites/estate-residences/banner/6.webp",
    "/assets/microsites/estate-residences/banner/7.webp",
  ];

  const amenitiesData = [
    {
      icon: "1.webp",
      title: "Leisure All Weather Swimming Pool",
      description:
        "The Estate Residences by Anant Raj Limited is a unique condominium complex, offering apartments designed with Indian values in mind and boasting unobstructed views of the protected Aravalli Range.",
      image: "/assets/microsites/estate-residences/amenities/1.webp",
    },
    {
      icon: "2.webp",
      title: "Kids play-ground",
      description: "Enjoy a state-of-the-art gym with cutting-edge equipment.",
      image: "/assets/microsites/estate-residences/amenities/2.webp",
    },
    {
      icon: "3.webp",
      title: "Pool side Alfresco Juice Bar",
      description: "Relax and unwind in our exclusive resident clubhouse.",
      image: "/assets/microsites/estate-residences/amenities/3.webp",
    },
    {
      icon: "4.webp",
      title: "Relaxing Areas",
      description: "Beautifully curated outdoor spaces for peace and leisure.",
      image: "/assets/microsites/estate-residences/amenities/4.webp",
    },
    {
      icon: "5.webp",
      title: "Spa, Beauty Parlour and Salon",
      description: "Safe and fun space for kids to enjoy.",
      image: "/assets/microsites/estate-residences/amenities/5.webp",
    },
    {
      icon: "6.webp",
      title: "Upper Level Gym",
      description: "Beautifully curated outdoor spaces for peace and leisure.",
      image: "/assets/microsites/estate-residences/amenities/6.webp",
    },
    {
      icon: "7.webp",
      title: "Aerobic and dance studio",
      description: "Safe and fun space for kids to enjoy.",
      image: "/assets/microsites/estate-residences/amenities/7.webp",
    },
    {
      icon: "8.webp",
      title: "Indoor sqaush court",
      description: "Beautifully curated outdoor spaces for peace and leisure.",
      image: "/assets/microsites/estate-residences/amenities/8.webp",
    },
    {
      icon: "9.webp",
      title: "all indoor outdoor sports",
      description: "Safe and fun space for kids to enjoy.",
      image: "/assets/microsites/estate-residences/amenities/9.webp",
    },
    {
      icon: "10.webp",
      title: "multipurpose party hall & party lawns",
      description:
        "The Estate Residences by Anant Raj Limited is a unique condominium complex, offering apartments designed with Indian values in mind and boasting unobstructed views of the protected Aravalli Range.",
      image: "/assets/microsites/estate-residences/amenities/10.webp",
    },
    {
      icon: "11.webp",
      title: "outdoor cinema",
      description: "Enjoy a state-of-the-art gym with cutting-edge equipment.",
      image: "/assets/microsites/estate-residences/amenities/11.webp",
    },
    {
      icon: "12.webp",
      title: "waterside leisure and alfresco area",
      description: "Relax and unwind in our exclusive resident clubhouse.",
      image: "/assets/microsites/estate-residences/amenities/12.webp",
    },
    {
      icon: "13.webp",
      title: "pool tables and sports bar",
      description: "Beautifully curated outdoor spaces for peace and leisure.",
      image: "/assets/microsites/estate-residences/amenities/13.webp",
    },
    {
      icon: "14.webp",
      title: "cigar lounge",
      description: "Safe and fun space for kids to enjoy.",
      image: "/assets/microsites/estate-residences/amenities/14.webp",
    },
    {
      icon: "15.webp",
      title: "bridge / cards room /seniors lounge",
      description: "Beautifully curated outdoor spaces for peace and leisure.",
      image: "/assets/microsites/estate-residences/amenities/15.webp",
    },
    {
      icon: "16.webp",
      title: "multiple F&B options",
      description: "Safe and fun space for kids to enjoy.",
      image: "/assets/microsites/estate-residences/amenities/16.webp",
    },
    {
      icon: "17.webp",
      title: "children activity centre",
      description: "Beautifully curated outdoor spaces for peace and leisure.",
      image: "/assets/microsites/estate-residences/amenities/17.webp",
    },
    {
      icon: "18.webp",
      title: "mini - theatre",
      description: "Safe and fun space for kids to enjoy.",
      image: "/assets/microsites/estate-residences/amenities/18.webp",
    },
  ];
  return (
    <>
      <Banner slides={bannerslides} />
      <ProjectOverview
        logoSrc="/assets/microsites/estate-residences/overview/project-logo.png"
        projectName="The Estate Residences"
        location="Sector 63A, Gurgaon"
        apartmentTypes="2, 3 & 4 BHK Apartments"
        status="Ready Move In"
        reraId="DEMORERAPRJ591510"
        reraLogoSrc="/assets/microsites/estate-residences/overview/rera.png"
      />

      <AboutProject
        heading="The luxury of uninterrupted vistas, the joy of boundless living."
        description="The Estate Residences by Anant Raj Limited is a unique condominium complex, offering apartments designed with Indian values in mind and boasting unobstructed views of the protected Aravalli Range. It features 4 towers with 30+ floors each, 248 bespoke units with 750 car parking spaces designed to give you a better quality of life."
        counters={[
          { label: "towers", value: 4 },
          { label: "floors each", value: 30, suffix: "+" },
          { label: "exclusive units", value: 248 },
        ]}
        brochureLink="/assets/microsites/estate-residences/estate-residences.pdf"
      />

      <Amenities
        heading="Experience Elite Amenities Like Never Before"
        data={amenitiesData}
        baseIconPath="assets/microsites/estate-residences/amenities"
      />

      <HighlightsSpecifications
        sectionTitle="The High Points of estate residences"
        highlights={[
          { title: "Triple height grand entrance lobby", imgSrc: "/assets/microsites/estate-residences/highlights_specifications/highlights/1.webp" },
          { title: "The sunken garden boasts of lush greenery & beauty", imgSrc: "/assets/microsites/estate-residences/highlights_specifications/highlights/2.webp" },
          { title: "unwind at the clue of good times" },
          { title: "sky lounge restaurant", imgSrc: "/assets/microsites/estate-residences/highlights_specifications/highlights/4.webp" },
          { title: "the lift takes you to your apartment directly private lifts" },
        ]}
        specifications={[
          { title: "Imported marble flooring in living areas" },
          { title: "Branded modular kitchen with appliances" },
          { title: "Laminated wooden flooring in bedrooms" },
          { title: "Anti-skid tiles in balconies and bathrooms" },
          { title: "Split ACs in all rooms" },
          { title: "High-speed elevators" },
        ]}
      />

      <FloorPlan
        heading="Experience Elevated Comfort In Every Detail"
        floorPlans={{
          "4bhk": [
            { src: "/assets/microsites/estate-residences/floorplan/1.webp", title: "4 BHK + Servant Room (TOWER 04)", brochure: "/assets/microsites/estate-residences/estate-residences.pdf" },
            { src: "/assets/microsites/estate-residences/floorplan/2.webp", title: "4 BHK + Servant Room (TOWER 03)", },
            { src: "/assets/microsites/estate-residences/floorplan/3.webp", title: "4 BHK + Servant Room (TOWER 01)", },
            { src: "/assets/microsites/estate-residences/floorplan/4.webp", title: "4 BHK + Servant Room (TOWER 02)", },
          ],
        }}
        masterPlan={{
          src: "/assets/microsites/estate-residences/floorplan/masterplan.webp",
          title: "Master Plan"
        }}
      />

      <LocationAdvantages
        title="Strategic Location Advantages"
        locationMap="/assets/microsites/estate-residences/location_advantage/locationmap.webp"
        tabsData={{
          hotel: [{ image: "/assets/microsites/estate-residences/location_advantage/1.webp", description: "2.4 KMS(5 MINS) HOTEL GRAND HYATT" }],
          hospital: [{ image: "/assets/microsites/estate-residences/location_advantage/2.webp", description: "3.5 KMS(7 MINS) MARENGO ASIA HOSPITAL" }],
          school: [{ image: "/assets/microsites/estate-residences/location_advantage/3.webp", description: "3.5 KMS(7 MINS) SHALOM PRESIDENCY SCHOOL" }],
          metro: [{ image: "/assets/microsites/estate-residences/location_advantage/4.webp", description: "3.6 KMS(8 MINS) RAPID METRO SEC 55-56" }],
          mall: [{ image: "/assets/microsites/estate-residences/location_advantage/5.webp", description: "6.4 KMS(10 MINS) SOUTH POINT MALL" }],
          airport: [{ image: "/assets/microsites/estate-residences/location_advantage/6.webp", description: "23 KMS[30 MINS) TRANSPORT IGI AIRPORT" }],
        }}
      />

      <Gallery
        title="Once In A Lifetime Experience"
        images={[
          { src: "/assets/microsites/estate-residences/gallery/1.webp" },
          { src: "/assets/microsites/estate-residences/gallery/2.webp" },
          { src: "/assets/microsites/estate-residences/gallery/3.webp" },
          { src: "/assets/microsites/estate-residences/gallery/4.webp" },
          { src: "/assets/microsites/estate-residences/gallery/5.webp" },
          { src: "/assets/microsites/estate-residences/gallery/6.webp" },
          { src: "/assets/microsites/estate-residences/gallery/7.webp" },
          { src: "/assets/microsites/estate-residences/gallery/8.webp" },
          { src: "/assets/microsites/estate-residences/gallery/9.webp" },
          { src: "/assets/microsites/estate-residences/gallery/10.webp" },
          { src: "/assets/microsites/estate-residences/gallery/11.webp" },
          { src: "/assets/microsites/estate-residences/gallery/12.webp" },
          { src: "/assets/microsites/estate-residences/gallery/13.webp" },
          { src: "/assets/microsites/estate-residences/gallery/14.webp" },
        ]}
      />
    </>
  )
}

export default page