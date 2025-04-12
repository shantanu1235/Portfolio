import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Section  from './components/Section/Section'
import './App.css'
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Project'
import ContectMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
        <Navbar/>
        <div className='container'> 
        <Section/>
        <Skills/>
        <Project/>
        <ContectMe/>
        </div>
        <Footer/>

    
        
        
 
    </div>
    
  )
}

export default App