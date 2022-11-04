import React from 'react'

import zuri from "./assets/Zuri.Internship_Logo.png";
import i4g from "./assets/I4G.png";

const FooterIcon = () => {
  return (
    <div>
    
      <div className="footer">
        <img src={zuri} alt="" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={i4g} alt="" />
      </div>
    </div>
  )
}

export default FooterIcon
