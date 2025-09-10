import React from 'react'
import ProjectAbout from './ProjectAbout'
import ProjectsPage from './ProjectsPage'

export default function Projects() {
    return (
        <div className='bg-[#FBF6F6]'>
            <ProjectAbout />
            <div className='wrapper'>
                <ProjectsPage />
            </div>
        </div>
    )
}
