import React from 'react'

const SkiilCard = ({ skill }) => {
  return (
    <div className='skill-card'>
        <div className='skill-icon'>{skill.icon}</div>
        <label className='skill-name'>{skill.name}</label>
    </div>
  )
}

export default SkiilCard