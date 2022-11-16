import React from 'react'
import './about.css'
import AboutImage from '../../../assets/about-image.png'
import Separator from '../../common/separator'
import ResumePdf from '../../../assets/resume.pdf'

const About = () => {
    return (
        <div className="about component__space" id="About">
            <Separator />
            <div className="container">
                <div className="row">
                    <div>
                        <img src={AboutImage} alt='Dinesh Kumar' className='about__img' />
                    </div>
                    <div>
                        <h1 className="about__heading">About Me</h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis metus eget fermentum laoreet. 
                                Integer sodales pulvinar justo, nec porta nulla porta quis. Vestibulum non turpis posuere, tristique felis vel, 
                                congue mauris. Mauris nibh augue, sagittis eget est a, gravida porttitor ligula. Etiam at ligula lorem.
                            </p>
                            <p className="about__text p__color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis metus eget fermentum laoreet. 
                                Integer sodales pulvinar justo, nec porta nulla porta quis. Vestibulum non turpis posuere, tristique felis vel, 
                                congue mauris. Mauris nibh augue, sagittis eget est a, gravida porttitor ligula. Etiam at ligula lorem.
                            </p>
                            <p className="about__text p__color">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis metus eget fermentum laoreet. 
                                Integer sodales pulvinar justo, nec porta nulla porta quis. Vestibulum non turpis posuere, tristique felis vel, 
                                congue mauris. Mauris nibh augue, sagittis eget est a, gravida porttitor ligula. Etiam at ligula lorem.
                            </p>
                            <div className="about__button">
                                <a href={ResumePdf} download='Dinesh Kumar Resume.pdf' className='download'>
                                    <i className="fi fi-rr-download"></i>
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About