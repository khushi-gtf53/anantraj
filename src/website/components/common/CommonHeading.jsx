"use client";

const CommonHeading = ({ children, customClass }) => {
    return (
        <h2 className={`text-primaryred font-sangbleu uppercase max-w-[90%] lg:max-w-[70%] tracking-[2px] leading-[30px] lg:leading-[40px] text-[13px] lg:text-[20px] ${customClass}`}>
            {children}
        </h2>
    )
}

export default CommonHeading