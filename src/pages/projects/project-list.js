import React from 'react'
import ProjectItem from './project-item'

const ProjectList = ({ projects }) => {

  return (
    <div className='project-list'>
        {projects.map((project) => {
            return(
                <ProjectItem project={project} key={project.id} />
            )
        })}
    </div>
  )
}

export default ProjectList