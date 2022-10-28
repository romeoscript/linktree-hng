import React from "react";
import github from "./assets/Social icon.png";
import slack from "./assets/slack.png";
import zuri from "./assets/Zuri.Internship_Logo.png";
import i4g from "./assets/I4G.png";
import profile from "./assets/WhatsApp Image 2022-10-28 at 4.35.06 AM.jpeg";

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
      </div>
      <div className="social__links">
        <img src={slack} alt="" />
        <img src={github} alt="" />
      </div>
      <div className="footer">
        <img src={zuri} alt="" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={i4g} alt="" />
      </div>
    </>
  );
};

export default Links;
