import React from 'react'
import { Link } from 'react-router-dom'
import './projects.css'

const ProjectCard = ({ project }) => {
  return (
    <div className='project-card' key={project.id}>
        <div className='project-info'>
            <Link to={`/projects/${project.id}`} className='project-title'>{project.title}</Link>
            <div className='project-links'>
                {
                    project.demoLink && <a href={project.demoLink} className='project-link'>
                        <div className='link-button'>
                            <i className="fi fi-rr-globe"></i>
                            Demo
                        </div>
                    </a>
                }
                {
                    project.githubLink && <a href={project.githubLink} className='project-link'>
                        <div className='link-button'>
                            <i className="devicon-github-original colored"></i>
                            Github
                        </div>
                    </a>
                }
            </div>
            <>{project.desc}</>
            <div className='project-tags'>
                {project.tags.map((tag, i) => {
                    return(
                        <label className='tag' key={i}>{tag}</label>
                    )
                })}
            </div>
        </div>
            <img src={project.image} className='project-images' alt='project-images' />    

    </div>
  )
}

export default ProjectCard