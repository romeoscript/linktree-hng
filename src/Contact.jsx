import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form action="#">
        <main className="form__flex">
            <div>
                <label htmlFor="First name">First name</label> <br />
                <input type="text" placeholder='Enter your first name'/>
            </div>
            <div>
                <label htmlFor="Last name">Last name</label> <br />
                <input type="text" placeholder='Enter your Last name'/>
            </div>
            <label htmlFor="email">Email</label> <br />
            <input type="email" placeholder='yourname@email.com' />
            <label htmlFor="message">Message</label><br />
            <textarea name="" id="" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
            <input type="submit" value="Send message" />
        </main>
      </form>
    </div>
  )
}

export default Contact
