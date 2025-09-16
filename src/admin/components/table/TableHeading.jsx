import React from 'react'

const TableHeading = ({columnKey,children}) => {
  return (
    <th
  key={columnKey}
  className="text-[14px] text-[var(--admin-primary)] border-b-0 font-roboto tracking-[1px] py-[10px]"
>
  {children}
</th>

  )
}

export default TableHeading
