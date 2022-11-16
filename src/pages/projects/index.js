import React from 'react'
import ProjectList from './project-list'
import './projects.css'
import { ProjectData } from '../../data/projects' 

const Projects = () => {

  const data = ProjectData;

  return (
    <div className='projects-page'>
      <ProjectList projects={data} />
    </div>
  )
}

export default Projects