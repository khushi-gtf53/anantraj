"use client"
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './projects.css'

const TownshipProjects = ()=>{

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const projectSections = document.querySelectorAll('.project_sec')

    projectSections.forEach((section, index) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section, 
          start: 'top top',
          end: 'bottom top',
          scrub: true, 
          pin: true, 
          pinSpacing: false,         
        }
      })
    })

  }, [])

  return(
    <div className='township_projects_section relative'>
      <div className="project_sec  relative">
        <img src="assets/township/projects/project2.jpg" alt="experience image 1" className="img-fluid w-full bg_img" />
        <div className="container">
          <div className="content absolute bottom-[80px] text-center mx-auto leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
            <h5 className='text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu'>The Estate Residences</h5>
            <p className='text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]'>Sector 63A, Gurugram, Haryana</p>
          </div>
        </div>
      </div>

      <div className="project_sec relative">
        <img src="assets/township/projects/project.webp" alt="experience image 1" className="img-fluid w-full bg_img" />
        <div className="container">
          <div className="content absolute bottom-[80px] text-center mx-auto leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
            <h5 className='text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu'>The Estate Residences</h5>
            <p className='text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]'>Sector 63A, Gurugram, Haryana</p>
          </div>
        </div>
      </div>
      <div className="project_sec relative">
        <img src="assets/township/projects/project2.jpg" alt="experience image 1" className="img-fluid w-full bg_img" />
        <div className="container">
          <div className="content absolute bottom-[80px] text-center mx-auto leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
            <h5 className='text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu'>The Estate Residences</h5>
            <p className='text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]'>Sector 63A, Gurugram, Haryana</p>
          </div>
        </div>
      </div>
      <div className="project_sec relative">
        <img src="assets/township/projects/project.webp" alt="experience image 1" className="img-fluid w-full bg_img" />
        <div className="container">
          <div className="content absolute bottom-[80px] text-center mx-auto leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
            <h5 className='text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu'>The Estate Residences</h5>
            <p className='text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]'>Sector 63A, Gurugram, Haryana</p>
          </div>
        </div>
      </div>

      <ul className='dots'>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </div>
  )
}

export default TownshipProjects