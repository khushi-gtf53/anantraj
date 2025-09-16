import './projects.css'

const TownshipProjects = ()=>{
  return(
    <div className='township_projects_section relative'>
      <img src="assets/township/projects/project.webp" alt="experience image 1" className="img-fluid w-full" />
        <div className="container">
          <div className="content absolute bottom-[80px] text-center mx-auto leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
            <h5 className='text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu'>The Estate Residences</h5>
            <p className='text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]'>Sector 63A, Gurugram, Haryana</p>
          </div>
        </div>
    </div>
  )
}

export default TownshipProjects