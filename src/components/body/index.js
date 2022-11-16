import React from 'react'
import './body.css'
import Main from './main'
import Projects from './projects'
import Skills from './skills'
import Education from './education'
import Experience from './experience'
import About from './about'

const Body = () => {
  return (
    <div className='body'>
      <section id='main'>
        <Main />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='education'>
        <div className='flex-section'>
          <Education />
          <Experience />
        </div>
      </section>
    </div>
  )
}

export default Body