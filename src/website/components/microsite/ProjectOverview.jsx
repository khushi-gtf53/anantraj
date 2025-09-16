"use client";

const ProjectOverview = ({ logoSrc, projectName, location, apartmentTypes, status, reraId, reraLogoSrc, patternBgSrc = './assets/pattern-bg.png'}) => {
    return (
        <section
       
        className="project_overview relative bg-[#FBF6F6] w-full sm:h-[50vh]">
            <div className="grid grid-cols-12 border-y border-black w-full sm:h-[25vh]">
                <div className="col-span-12 sm:col-span-3 border-r border-black ">
                    <div className="project-logo flex justify-center py-5 sm:py-0 items-center h-full">
                        <img src={logoSrc} alt="project logo" className="w-[80%]" />
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-9 px-10 sm:py-5">
                    <div className="sm:w-[95%] py-3 sm:py-0 h-full flex flex-col justify-between">
                        <div className="project_info">
                            <div className="project_name">
                                <h1 className="uppercase tracking-wide mb-2 text-xl sm:text-2xl font-sangbleu">
                                    {projectName}
                                </h1>
                            </div>
                            <div className="project_location uppercase tracking-wide">
                                {location}
                            </div>
                        </div>
                        <div className="project-details  uppercase tracking-wider flex flex-col sm:flex-row gap-3 sm:gap-0 items-start py-4  sm:items-center justify-between">
                            <div className="apartment text-sm sm:text-lg">{apartmentTypes}</div>
                            <div className="w-[1px] hidden sm:block  h-full bg-black/50"/>
                            <div className="status text-sm sm:text-lg">{status}</div>
                            <div className="w-[1px]  hidden sm:block h-full bg-black/50"/>
                            <div className="rera flex gap-2 items-center text-sm sm:text-lg">
                                {reraId}
                                <span>
                                    <img src={reraLogoSrc} alt="RERA logo" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <img
        src="/assets/pattern-bg.png"
        alt="pattern-bg"
        className="h-[70px] bg-[#FBF6F6] absolute left-0 bottom-0 w-full object-cover"
      />
        </section>
    );
};

export default ProjectOverview;