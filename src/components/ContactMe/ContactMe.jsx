import React from 'react'
import './ContactMe.css'
import ContactinfoCard from './ContactinfoCard/ContactinfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
   <section className='contact-container'>
    <h5>Contact Me</h5>
    <div className="contact-content">
      <div style={{flex:1}}>
        <ContactinfoCard 
        iconUrl={"./src/assects/images/email.svg"}
        text="shantanunigam786@gmail.com"
        />
        <ContactinfoCard 
        iconUrl={"./src/assects/images/github.svg"}
        text="https://github.com/shantanu1235"
        />
      </div>
      <div style={{flex:1}}>
        <ContactForm/>
      </div>
    </div>
   </section>
  )
}

export default ContactMe