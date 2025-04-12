import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form >
            <div className='name-container'>
                <input type="text" name='firstname' placeholder='firstname' />
                <input type="text" name='lastname' placeholder='lastname' />
            </div>
            <input type="email" name='email' placeholder='email' />
            <textarea type='text' name="message" id="" placeholder='message' rows={3}></textarea>
            <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm