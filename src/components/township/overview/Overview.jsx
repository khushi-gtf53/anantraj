"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

const TownshipOverview = ()=>{

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the content when it enters the viewport
    gsap.fromTo(".overview_section .content",
      {
        opacity:0,
        y:50,
      },
      {
        opacity:1,
        y:0,
        duration:1,
        ease:"power3.out",
        scrollTrigger:{
          trigger:".overview_section",
          start:"top 60%",
          end:"bottom up",
          toggleActions:"play none none none"
        }
      })
  }, [])

  return(
    <div className='overview_section py-[150px]'>
        <div className="container">
          <div className="content text-center max-w-[750px] mx-auto leading-[26px]">
            <p>Founded in 1969, Anant Raj Limited established itself as a symbol of unparalleled quality and ethical business practices, earning recognition as one of the foremost construction and development firms of the 1970s and 1980s. During this time, the Anant Raj Limited successfully built nearly 30,000 homes across Delhi and the NCR region.</p>
          </div>
        </div>
    </div>
  )
}

export default TownshipOverview