import React from 'react'

const Card = ({children,className}) => {
  return (
    <div className={`border border-[#45464f] rounded-[15px] bg-[#181a2633] py-[30px] 2xl:py-[40px] px-[20px] 2xl:px-[32px] ${className}`}>
      {children}
    </div>
  )
}

export default Card
