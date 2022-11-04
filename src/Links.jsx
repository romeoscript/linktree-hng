import React from "react";

import profile from "./assets/WhatsApp Image 2022-10-28 at 4.35.06 AM.jpeg";
import { Link } from 'react-router-dom'
import github from "./assets/Social icon.png";
import slack from "./assets/slack.png";
const Links = () => {
  return (
    <>
      <div className="profile">
        <div className="profile_container">
          <img id="profile__img" src={profile} alt="" />
        </div>
        <h3 className="profile_name">
         <a id="twitter" href="https://twitter.com/romeoscript1">Chukwuemeka Romeo </a>  
         <h2 style={{ display:'none' }} id="slack">Romeoscript</h2>
        </h3>
      </div>
      <div className="links">
        <a id="twitter" href="https://twitter.com/romeoscript1">Twitter Link</a>
        <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
        <a href="https://books.zuri.team/" id="books">Zuri Books</a>
        <a href="https://books.zuri.team/" id="book__python">Python Books</a>
        <a href="https://background.zuri.team/" id="pitch">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a>
        <Link to="/contact" id="contact">Contact Me</Link>
      </div>
      <div className="social__links">
        <img src={slack} alt="" />
        <img src={github} alt="" />
      </div>
    </>
  );
};

export default Links;
