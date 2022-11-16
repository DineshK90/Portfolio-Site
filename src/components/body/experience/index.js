import React from 'react'
import './experience.css'
import Seprator from '../../common/separator'
import ExperienceCard from './experience-card'
import { ExperienceData } from '../../../data/experience'

const Experience = () => {

  const data = ExperienceData

  return (
    <div className='experience'>
      <Seprator />
      <h2 className='section-title'>Experience</h2>
      <div className='exp-list'>
        {data.map((experience) => {
          return (
            <ExperienceCard experience={experience} key={experience.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Experience