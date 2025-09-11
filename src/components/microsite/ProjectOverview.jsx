"use client";

import Image from "next/image";

const ProjectOverview = ({
  logoSrc,
  projectName,
  location,
  apartmentTypes,
  status,
  reraId,
  reraLogoSrc,
  patternBgSrc = "/assets/pattern-bg.png",
}) => {
  return (
    <section className="project_overview relative bg-[#FBF6F6] w-full sm:h-[50vh]">
      <div className="grid grid-cols-12 border-y border-black w-full h-auto sm:h-[25vh]">
        {/* Left: Logo */}
        <div className="col-span-12 sm:col-span-3 border-r border-black">
          <div className="project-logo flex justify-center py-5 sm:py-0 items-center h-full">
            <Image
              src={logoSrc}
              alt="Project logo"
              width={400}
              height={200}
              className="w-[80%] h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Project Info */}
        <div className="col-span-12 sm:col-span-9 px-10 sm:py-5">
          <div className="sm:w-[95%] py-3 sm:py-0 h-full flex flex-col justify-between">
            {/* Project Name + Location */}
            <div className="project_info">
              <h1 className="uppercase tracking-wide mb-2 text-xl sm:text-2xl font-sangbleu">
                {projectName}
              </h1>
              <p className="project_location uppercase tracking-wide">
                {location}
              </p>
            </div>

            {/* Details */}
            <div className="project-details uppercase tracking-wider flex flex-col sm:flex-row gap-3 sm:gap-0 items-start py-4 sm:items-center justify-between">
              <div className="apartment text-sm sm:text-lg">{apartmentTypes}</div>
              <div className="w-[1px] hidden sm:block h-full bg-black/50" />
              <div className="status text-sm sm:text-lg">{status}</div>
              <div className="w-[1px] hidden sm:block h-full bg-black/50" />
              <div className="rera flex gap-2 items-center text-sm sm:text-lg">
                {reraId}
                {reraLogoSrc && (
                  <Image
                    src={reraLogoSrc}
                    alt="RERA logo"
                    width={60}
                    height={30}
                    className="object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pattern Background */}
      <Image
        src={patternBgSrc}
        alt="pattern background"
        width={1920}
        height={70}
        className="h-[70px] bg-[#FBF6F6] relative sm:absolute left-0 bottom-0 w-full object-cover"
        sizes="100vw"
      />
    </section>
  );
};

export default ProjectOverview;
