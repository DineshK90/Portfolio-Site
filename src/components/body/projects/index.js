import React from 'react'
import './projects.css'
import { ProjectData } from '../../../data/projects'
import ProjectCard from './project-card'
import Separator from '../../common/separator'
import { Link } from "react-router-dom";

const Projects = () => {

  const data = ProjectData.slice(-2)

  return (
    <div className='projects'>
      <Separator />
      <h2 className='section-title'>Projects</h2>
      <Link to="/projects" className='see-all'>
        <span>See all my projects</span>
        <i className="fi fi-rr-angle-right"></i>
      </Link>
      <div>
        {data.map((project) => {
          return (
            <ProjectCard project={project} key={project.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects