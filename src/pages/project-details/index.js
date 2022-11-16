import React from 'react'
import { ProjectData } from '../../data/projects'
import { useParams } from "react-router-dom"
import './project-details.css'
import ProjectDetailsCard from './project-details-card'

const ProjectDetails = () => {
   const {id} = useParams()

   const thisProject = ProjectData.find(p => p.id == id)

  return (
    <div className='project-details'>
        <ProjectDetailsCard project={thisProject} />
    </div>
  )
}

export default ProjectDetails