import React from 'react'
import './main.css'
import AboutImage from '../../../assets/about-image.png'
import SocialContact from '../../common/social-contact'

const Main = () => {
  return (
    <div className='main'>
      <div className='main-top'>
        <div className='main-info'>
          <span className='info-text'>Hello There 👋, I am</span> <br />
          <span className='info-name'>Dinesh Kumar</span>. <br />
          <span className='info-text'>Software Engineer</span>
          <div>
            <SocialContact />
          </div>
          <p style={{maxWidth: '80%', margin: '0 auto'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor dignissim sapien, eget aliquam nisl accumsan in. Curabitur cursus ipsum eu leo viverra, vitae iaculis dolor suscipit. Sed malesuada dolor vitae sollicitudin sollicitudin. Aliquam bibendum egestas elit, at facilisis diam vulputate id.
          </p>
         
        </div>
        <div>
          <img src={AboutImage} className='main-image' alt='Dinesh Kumar' />
        </div>
      </div>
    </div>
  )
}

export default Main