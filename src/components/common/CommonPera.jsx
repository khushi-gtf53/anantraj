"use client";

const CommonPera = ({children, extraClass}) => {
  return (
    <div className={`font-lato  ${extraClass} text-[14px] font-[400] tracking-[1px] leading-[27px]`}>
        {children}
    </div>
  )
}

export default CommonPera