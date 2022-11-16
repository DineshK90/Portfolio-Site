import React from 'react'
import './home.css'
import Header from '../header'
import Body from '../body'
import Footer from '../footer'
import { Routes, Route } from "react-router-dom"
import Projects from '../../pages/projects'
import Contact from '../../pages/contact'
import ProjectDetails from '../../pages/project-details'

const Home = ({ toggleTheme, theme }) => {
  return (
    <div className='home'>
      <div>
        <Header toggleTheme={toggleTheme} theme={theme} />
      </div>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home