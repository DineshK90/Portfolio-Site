import React from 'react'

const EducationCard = ({ education }) => {
  return (
    <div className='edu-card'>
        <div className='edu-info'>
            <label className='edu-name'>{education.title}</label>
            <div className='edu-date'>
                <label>{education.year}</label>
            </div>
            <div className='edu-school'>
                <label>{education.school}</label>
            </div>
        </div>
    </div>
  )
}

export default EducationCard