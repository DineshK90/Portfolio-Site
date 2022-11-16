import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import './header.css'
import Mobile from './mobile'
import Web from './web'

const Header = ({ toggleTheme, theme }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>Dinesh Kumar</Link>
      </div>
      <div className='menu'>
        <div className='web-menu'>
          <Web />
          <span style={{marginLeft: '10px'}}>
            <ReactSwitch offColor='#171316' onColor='#F5FEF6' onHandleColor='#171316' checkedIcon={false} uncheckedIcon={false} height={20} width={40} onChange={toggleTheme} checked={theme === "dark"} />
          </span>
        </div>
        <div className='mobile-menu'>
          <div onClick={() => setIsOpen(!isOpen)}>
            <i className="fi fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} toggleTheme={toggleTheme} theme={theme} />}
        </div>
      </div>
    </div>
  )
}

export default Header