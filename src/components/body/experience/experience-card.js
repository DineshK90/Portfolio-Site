import React from 'react'

const ExperienceCard = ({ experience }) => {
  return (
    <div className='exp-card'>
        <div className='exp-info'>
            <label className='exp-name'>{experience.title}</label>
            <div className='exp-date'>
                <label>{experience.year}</label>
            </div>
            <div className='exp-school'>
                <label>{experience.experience}</label>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard