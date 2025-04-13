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
            <img src="src\assects\images\science.png" alt="" />
      </div>
      <img src="src\assects\images\my-image.png" alt="" />
        </div>
        <div>
          <div className='tech-icon'>
            <img src="src\assects\images\css-3.png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="src\assects\images\html.png" alt="" />
          </div>
          <div className='tech-icon'>
            <img src="src\assects\images\js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section