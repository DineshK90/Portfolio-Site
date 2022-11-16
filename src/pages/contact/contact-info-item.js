import React from 'react'

const ContactInfoItem = ({ icon, text }) => {
  return (
    <div className='ItemStyles'>
      <div className="icon">{icon}</div>
      <div className="info">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ContactInfoItem