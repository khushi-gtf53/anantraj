"use client";

import CountUp from "react-countup";
import CommonHeading from "../../components/common/CommonHeading"
import { useInView } from "react-intersection-observer";

const AboutProject = ({ heading, description, counters = [], brochureLink = "#",
}) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section
         data-gsap="fade-up"
      data-gsap-duration="1"
      data-gsap-delay="0.5"
        className="about_project w-full wrapper bg-white ">
            <div className="grid grid-cols-12 border-b border-black pb-14">
                <div className="col-span-12 lg:col-span-5">
                     <CommonHeading>{heading}</CommonHeading>
                </div>
                <div className="col-span-12 lg:col-span-7 mt-6 lg:mt-0">
                    <div className="about tracking-[2px] leading-[30px] text-justify text-[13px] lg:text-[16px]">
                        {description}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 pt-20 items-start" ref={ref}>
                <div className="col-span-12 lg:col-span-9">
                    <div className="counter max-w-[90%] lg:max-w-[70%] flex flex-wrap gap-10 font-sangbleu uppercase">
                        {counters.map(({ label, value, suffix = "" }, index) => (
                            <div key={index} className="min-w-[100px]">
                                <h3 className="text-4xl mb-2">
                                    {inView ? (
                                        <CountUp end={value} duration={1} suffix={suffix} />
                                    ) : (
                                        "0"
                                    )}
                                </h3>
                                <h4>{label}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3 mt-10 lg:mt-0">
                    <div className="download py-5 border-y text-center uppercase text-primaryblue font-bold">
                        <a href={brochureLink} download>
                            download brochure
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutProject;
