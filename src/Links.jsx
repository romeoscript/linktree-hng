import React from 'react'
import github from './assets/Social icon.png'
import slack from './assets/slack.png'

const Links = () => {
  return (
   <>
    <div className='links'>
      <a href="">Twitter Link</a>
      <a href="">Zuri Team</a>
      <a href="">Zuri Books</a>
      <a href="">Python Books</a>
      <a href="">Background Check for Coders</a>
      <a href="">Design Books</a>
     
    </div>
    <div className="social__links">
        <img src={slack} alt="" />
        <img src={github} alt="" />
    </div>
   </>
  )
}

export default Links
