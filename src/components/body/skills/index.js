import React from 'react'
import './skills.css'
import Separator from '../../common/separator'
import { SkillsData } from '../../../data/skills'
import SkiilCard from './skill-card'

const Skills = () => {

  const data = SkillsData;

  return (
    <div className='skills'>
      <Separator />
      <h2 className='section-title'>Skills</h2>
      <div className='skills-container'>
        {data.map((skill) => {
          return (
            <div className='skills-section' key={skill.id}>
              <div className='skills-list'>
                <SkiilCard skill={skill} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills