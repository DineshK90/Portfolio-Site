import React from 'react'

const ProjectItem = ({ project }) => {
  return (
    <a className='project-item' key={project} href={`/projects/${project.id}`}>
        <div>
            <img src={project.image} alt={project.title} className='project-image' />
        </div>
        <div>
            <h5 className='projects-page-name'>{project.title}</h5>
            <div className='projects-page-tags'>
                    {project.tags.map((tag, i) => {
                        return(
                            <label className='projects-page-tag' key={i}>{tag}</label>
                        )
                    })}
                </div>
        </div>
    </a>
  )
}

export default ProjectItem