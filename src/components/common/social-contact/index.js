import React from 'react'
import { SocialData } from '../../../data/social'
import './social-contact.css'

const SocialContact = () => {

    const data = SocialData;

  return (
    <div className='social-contact'>
        {data.map((item) => {
            return(
                <a href={item.link} key={item.id} target="_blank" rel="noreferrer">
                    <div className='social-icon-div'>
                        {item.icon}
                    </div>
                </a>
            )
        })}
    </div>
  )
}

export default SocialContact