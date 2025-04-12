import React from 'react'
import './Section.css'

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
            <img src="src\assets\images\science.png" alt="" />
      </div>
      <img src="src\assets\images\my-image.png" alt="" />
        </div>
        <div>
          <div className='tech-icon'>
            <img src="src\assets\images\css-3.png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="src\assets\images\html.png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="src\assets\images\js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section