import React from 'react'
import './web.css'
import { useLocation, Link } from "react-router-dom"

const Web = () => {

    const Location = useLocation()

    return (
        <div className='web'>
            {
                Location.pathname === "/" ?
                    <>
                        <div className='web-option'>
                            <a href='#about' className='underline'>
                                <i className="fi fi-rr-user option-icon"></i>
                                About
                            </a>
                        </div>
                        <div className='web-option'>
                            <a href='#projects' className='underline'>
                                <i className="fi fi-rr-edit-alt option-icon"></i>
                                Projects
                            </a>
                        </div>
                        <div className='web-option'>
                            <a href='#skills' className='underline'>
                                <i className="fi fi-rr-laptop option-icon"></i>
                                Skills
                            </a>
                        </div>
                        <div className='web-option'>
                            <a href='#education' className='underline'>
                                <i className="fi fi-rr-graduation-cap option-icon"></i>
                                Education
                            </a>
                        </div>
                        <div className='web-option'>
                            <Link to="/contact" className='underline'>
                                <i className="fi fi-rr-envelope option-icon"></i>
                                Contact
                            </Link>
                        </div>
                    </> : <>
                        {
                            Location.pathname === "/contact" ?
                                <>
                                    <div className='web-option'>
                                        <Link to="/projects" className='underline'>
                                            <i className="fi fi-rr-edit-alt option-icon"></i>
                                            Projects
                                        </Link>
                                    </div>
                                    <div className='web-option'>
                                        <Link to="/" className='underline'>
                                            <i className="fi fi-rr-angle-double-small-left option-icon"></i>
                                            Go Home
                                        </Link>
                                    </div>
                                </> : <>
                                <div className='web-option'>
                                    <Link to="/contact" className='underline'>
                                        <i className="fi fi-rr-envelope option-icon"></i>
                                        Contact
                                    </Link>
                                </div>
                                    <div className='web-option'>
                                        <Link to="/" className='underline'>
                                            <i className="fi fi-rr-angle-double-small-left option-icon"></i>
                                            Go Home
                                        </Link>
                                    </div>
                                </>
                        }

                    </>
            }
        </div>
    )
}

export default Web