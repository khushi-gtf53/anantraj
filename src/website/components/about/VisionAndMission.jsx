"use client";

export default function VisionAndMission() {
  return (
    <div id="missionvision"
      style={{
        background: "url(./assets/mission.webp)",
      }}
      className=" sm:min-h-screen px-[20px] bg-no-repeat bg-cover py-[40px] sm:px-[100px] flex-wrap flex w-full overflow-hidden"
    >
      {/* Mission Section - Left Side */}
      <div className="basis-[100%] flex items-center justify-start">
        <div className="max-w-md lg:max-w-lg xl:max-w-xl">
          <h2 className="text-3xl sm:text-6xl   font-[400] text-white mb-4 md:mb-10 lg:mb-12 tracking-[4px]">
            MISSION
          </h2>
          <p
            className="font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[24px] sm:leading-[32px]
          text-white"
          >
            To create spaces that embody permanence, purpose, and pride  where heritage meets modernity, and every home carries forward a legacy. We are not just builders of structures, but custodians of values, designing sanctuaries that honor tradition, embrace innovation, and uphold trust as the truest luxury.
          </p>
        </div>
      </div>

      {/* Vision Section - Right Side */}
      <div className="basis-[100%] mt-5 sm:mt-[60px] flex items-center justify-end">
        <div className="max-w-md lg:max-w-lg xl:max-w-xl">
          <h2 className="text-3xl sm:text-6xl  uppercase font-[400] text-white mb-4 md:mb-10 lg:mb-12 tracking-[4px]">
            Vision
          </h2>
          <p
            className="font-lato text-[14px] font-[400] tracking-[1px] mb-[30px] leading-[24px] sm:leading-[32px]
          text-white"
          >
            To stand as India’s timeless gharana of real estate craftsmanship  blending scale with soul, and heritage with progress. Our vision is to set a standard that endures beyond trends, offering future generations not just addresses, but heirlooms of dignity, identity, and enduring significance.
          </p>
        </div>
      </div>
    </div>
  );
}
