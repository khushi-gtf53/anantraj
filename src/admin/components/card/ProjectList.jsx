import React, { useEffect } from 'react'
import Card from './Card'
import CardHeading from './CardHeading'
import { useApi } from '../../hooks/useApi';
import { BASE_ADMIN } from '../../../../config';
import { useCrud } from '../../hooks/useCrud';

const ProjectList = ({setTotalProjects}) => {
  const api = useApi(BASE_ADMIN);
  const { tableData : projectList } = useCrud(api, "projects");

   // whenever projectList changes, update parent
  useEffect(() => {
    setTotalProjects(projectList?.length ? String(projectList.length).padStart(2, "0") : "0");
  }, [projectList, setTotalProjects]);
  return (
    <Card>
      <CardHeading>Project List</CardHeading> 
      {projectList?.length > 0 ?
      // {/* <h4 className='text-[var(--admin-primary)] font-roboto py-[10px] mb-[10px] border-b border-[#45464f]'>Name</h4> */}
      <ul>
        {projectList.map((item,i)=>(
        <li key={i} className='text-[#eee] text-[12px] font-robotoLight tracking-[0.8px] leading-[26px] mb-[10px] pb-[10px] border-b border-[#45464f] '>{item?.name}</li>
        ))}
      </ul>
      :
        <p className='text-[#eee] text-[12px] font-robotoLight tracking-[0.8px] leading-[26px] mb-[10px] pb-[10px] border-b border-[#45464f] '>No Data Available</p>
      }
    </Card>
  )
}

export default ProjectList
