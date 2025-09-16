import React from 'react'
import ProjectAbout from './ProjectAbout'
import ProjectsPage from './ProjectsPage'
import Image from 'next/image'

export default function Projects() {
    return (
        <div className='bg-[#FBF6F6] relative'>
            <ProjectAbout />
            <div className='wrapper'>
                <ProjectsPage />
            </div>
             {/* Background Pattern */}
              <Image
                src="/assets/pattern-bg.png"
                alt="pattern-bg"
                width={1920}
                height={70}
                priority
                className="h-[70px] bg-[#FBF6F6] absolute left-0 bottom-0 w-full object-cover"
              />
        </div>
    )
}
