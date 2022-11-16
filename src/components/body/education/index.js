import React from 'react'
import './education.css'
import Seprator from '../../common/separator'
import {EducationData} from '../../../data/education'
import EducationCard from './education-card'

const Education = () => {

  const data = EducationData
  
  return (
    <div className='education'>
      <Seprator />
      <h2 className='section-title'>Education</h2>
      <div className='edu-list'>
        {data.map((education) => {
          return (
            <EducationCard education={education} key={education.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Education