import React from 'react'
import './ContactMe.css'
import ContactinfoCard from './ContactinfoCard/ContactinfoCard'
import ContactForm from './ContactForm/ContactForm'
import github from '../../assets/images/github.svg'
import email from '../../assets/images/email.svg'

const ContactMe = () => {
  return (
   <section className='contact-container'>
    <h5>Contact Me</h5>
    <div className="contact-content">
      <div style={{flex:1}}>
        <ContactinfoCard 
        iconUrl={email}
        text="shantanunigam786@gmail.com"
        />
        <ContactinfoCard 
        iconUrl={github}
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