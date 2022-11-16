import React from 'react'

const ProjectDetailsCard = ({ project }) => {
    return (
        <div>
            <div>
                <img src={project.image} className='details-project-img' alt={project.title} />
            </div>
            <div>
                <h3>{project.title}</h3>
                <div className='projects-page-tags'>
                    {project.tags.map((tag, i) => {
                        return(
                            <label className='tag' key={i}>{tag}</label>
                        )
                    })}
                </div>
                <p>{project.desc}</p>
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
            </div>
            
        </div>
  )
}

export default ProjectDetailsCard