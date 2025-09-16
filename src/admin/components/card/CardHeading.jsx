import React from 'react'

const CardHeading = ({icon: Icon,children,className}) => {
  return (
    <h6 className={`flex items-center gap-[5px] mb-[25px] text-[12px] tracking-[0.8px] uppercase text-[var(--admin-yellow)] font-josefin ${className}`}>
      {Icon && <Icon className="text-[20px]" />}
      {children}
    </h6>
  )
}

export default CardHeading
