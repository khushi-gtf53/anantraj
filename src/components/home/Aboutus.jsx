const Aboutus = () => {
  return (
    <section
      data-gsap="fade-up"
      data-gsap-duration="1"
      data-gsap-delay="0.5"
      className="px-[20px] lg:px-[100px] bg-white py-[40px] lg:py-[100px]"
    >
      <div className="flex justify-between flex-wrap font-sangbleu">
        <div className="flex basis-[100%] lg:basis-[70%] flex-col">
          <h2 className="text-primaryred mb-[40px] uppercase lg:text-left text-center tracking-[2px] leading-[30px] lg:leading-[40px] font-[200] text-[12.5px] lg:text-[20px]">
            <span>We develop quality infrastructure</span>
            <span className="block">and real estate projects</span>
          </h2>

          <div className="flex  flex-wrap">
            <span className="basis-[20%] lg:basis-[20%] leading-[60px] lg:leading-[150px] text-[80px] lg:text-[190px] text-primaryblue font-lato">
              A
            </span>
            <p className="basis-[80%] lg:basis-[65%] lg:ml-[10px] text-justify text-[15px] leading-[28px] lg:mt-0 mt-[-10px] lg:leading-[32px] tracking-[1.5px] font-lato">
              <span className="lg:inline hidden ">
                nant Raj Limited has been a leader in India's real estate
                landscape since 1969, delivering landmark
              </span>
              <span className="inline lg:hidden">
                {" "}
                nant Raj Limited has been a leader in India's real estate
                landscape since 1969, delivering landmark
              </span>
              <span className="hidden lg:inline">
                developments across residential, commercial, and IT
                infrastructure sectors. With a commitment to innovation, luxury,
                and sustainability, we craft future-ready spaces that elevate
                lifestyles and redefine urban living.
              </span>
            </p>
            <p className="lg:hidden inline-block text-justify text-[15px] leading-[28px]  lg:leading-[32px] tracking-[1.5px] font-lato">
              across residential commercial, and IT infrastructure sectors. With
              a commitment to innovation, luxury, and sustainability, we craft
              future-ready spaces that elevate lifestyles and redefine urban
              living.
            </p>
          </div>
        </div>

        <p className="basis-[100%] lg:mt-0 mt-[0px] lg:basis-[25%]  lg:text-end">
          <span className="hidden lg:block leading-[60px] lg:leading-[100px] text-[65px] lg:text-[95px] text-left lg:text-end w-full text-primaryblue">
            1969
          </span>
          <span className="lg:text-end w-full hidden lg:block mt-[5px] text-left tracking-[1.5px] text-[20px] font-[100]">
            Founded in
          </span>
          <button className="block mx-[auto] lg:hidden font-[600]  w-[70%] lg:w-[350px] text-[14px] text-primaryblue text-center lg:mt-0 mt-[2.5rem]  font-lato border-y-[1px] py-[9px] px-[25px] tracking-[1px] border-primaryblue border-y-solid">
            EXPLORE MORE
          </button>
          <button className="lg:block hidden border-primaryblue mt-[100px] font-[200] text-[12px] tracking-[1.5px] ml-auto border-solid border-[1px] text-primaryblue px-8 py-[14px]">
            EXPLORE MORE
          </button>
        </p>
      </div>
    </section>
  );
};

export default Aboutus;
