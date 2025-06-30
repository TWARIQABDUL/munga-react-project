import React from 'react'

import closee from '/assets/icon-close.svg'
function MobileList({setStatus}) {
    console.log(setStatus);
    
  return (
    <>
     <div className="mobile-menu-container ">
        <button className="close-menu" id="close" onClick={setStatus} ><img src={closee} alt=""/></button>
        <ul>
            <li><Link to="/about.html">Home</Link></li>
            <li><Link to="/about.html">About Us</Link></li>
            <li><Link to="contactus.html">Contact Us</Link></li>
        </ul>
    </div>
    </>
  )
}

export default MobileList