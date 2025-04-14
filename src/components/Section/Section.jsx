import React from 'react'
import './Section.css'
import scince from '../../assets/images/science.png'
import css from '../../assets/images/css-3.png'
import html from '../../assets/images/html.png'  
import js from '../../assets/images/js.png'
import myimage from '../../assets/images/my-image.png'

function Section() {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Building Digital Experiences That Inspire </h2>
        <p>Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web solutions</p>
      </div>
      <div className='hero-img'>
        <div>
          <div className='tech-icon' >
            <img src={scince} alt="" />
      </div>
      <img src={myimage} alt="" />
        </div>
        <div>
          <div className='tech-icon'>
            <img src={css} alt="" />
          </div>
          <div className='tech-icon'>
            <img src={html} alt="" />
          </div>
          <div className='tech-icon'>
            <img src={js} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section