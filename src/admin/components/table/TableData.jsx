import React from 'react'

const TableData = ({tableDataKey,children,className,colSpan}) => {
  return (
    <td key={tableDataKey} colSpan={colSpan} className={`text-[#eee] font-robotoLight tracking-[1px] p-[10px]  text-[14px] text-center ${className}`}>
      {children}
    </td>
  )
}

export default TableData
