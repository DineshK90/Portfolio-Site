import React from 'react'
import './mobile.css'
import { useLocation, Link } from "react-router-dom"
import ReactSwitch from 'react-switch'

const Mobile = ({ isOpen, setIsOpen, toggleTheme, theme }) => {

    const Location = useLocation()

    return (
        <div className='mobile'>
            {
                Location.pathname === "/" ?
                    <>
                        <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
                            <i className="fi fi-rr-cross-small"></i>
                        </div>
                        <div className='mobile-options'>
                            <div className='mobile-option'>
                                <a href='#about'  onClick={() => setIsOpen(!isOpen)}>
                                    <i className="fi fi-rr-user option-icon"></i>
                                    About
                                </a>
                            </div>
                            <div className='mobile-option'>
                                <a href='#projects' onClick={() => setIsOpen(!isOpen)}>
                                    <i className="fi fi-rr-edit-alt option-icon"></i>
                                    Projects
                                </a>
                            </div>
                            <div className='mobile-option'>
                                <a href='#skills' onClick={() => setIsOpen(!isOpen)}>
                                    <i className="fi fi-rr-laptop option-icon"></i>
                                    Skills
                                </a>
                            </div>
                            <div className='mobile-option'>
                                <a href='#education' onClick={() => setIsOpen(!isOpen)}>
                                    <i className="fi fi-rr-graduation-cap option-icon"></i>
                                    Education
                                </a>
                            </div>
                            <div className='mobile-option'>
                                <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
                                    <i className="fi fi-rr-envelope option-icon"></i>
                                    Contact
                                </Link>
                            </div>
                            <div className='mobile-option'>
                                <span style={{marginLeft: '10px'}}>
                                    <ReactSwitch offColor='#171316' onColor='#F5FEF6' onHandleColor='#171316' checkedIcon={false} uncheckedIcon={false} height={20} width={40} onChange={toggleTheme} checked={theme === "dark"} />
                                </span>
                            </div>
                        </div>
                    </> : <>
                        <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
                            <i className="fi fi-rr-cross-small"></i>
                        </div>
                        <div className='mobile-options'>
                            {
                                Location.pathname === "/contact" ?
                                    <>
                                        <div className='mobile-option'>
                                            <Link to="/projects" onClick={() => setIsOpen(!isOpen)}>
                                                <i className="fi fi-rr-edit-alt option-icon"></i>
                                                Projects
                                            </Link>
                                        </div>
                                        <div className='mobile-option'>
                                            <Link to="/" onClick={() => setIsOpen(!isOpen)}>
                                                <i className="fi fi-rr-angle-double-small-left option-icon"></i>
                                                Go Home
                                            </Link>
                                        </div>
                                        <div className='mobile-option'>
                                            <span style={{marginLeft: '10px'}}>
                                                <ReactSwitch offColor='#171316' onColor='#F5FEF6' onHandleColor='#171316' checkedIcon={false} uncheckedIcon={false} height={20} width={40} onChange={toggleTheme} checked={theme === "dark"} />
                                            </span>
                                        </div>
                                    </> : <>
                                        <div className='mobile-option'>
                                            <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
                                                <i className="fi fi-rr-user option-icon"></i>
                                                Contact
                                            </Link>

                                        </div>
                                        <div className='mobile-option'>
                                            <Link to="/" onClick={() => setIsOpen(!isOpen)}>
                                                <i className="fi fi-rr-angle-double-small-left option-icon"></i>
                                                Go Home
                                            </Link>
                                        </div>
                                        <div className='mobile-option'>
                                            <span style={{marginLeft: '10px'}}>
                                                <ReactSwitch offColor='#171316' onColor='#F5FEF6' onHandleColor='#171316' checkedIcon={false} uncheckedIcon={false} height={20} width={40} onChange={toggleTheme} checked={theme === "dark"} />
                                            </span>
                                        </div>
                                    </>
                            }

                        </div>
                    </>
            }
        </div>
    )
}

export default Mobile