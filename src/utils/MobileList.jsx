import React from 'react'

import closee from '/assets/icon-close.svg'
function MobileList({setStatus}) {
    console.log(setStatus);
    
  return (
    <>
     <div className="mobile-menu-container ">
        <button className="close-menu" id="close" onClick={setStatus} ><img src={closee} alt=""/></button>
        <ul>
            <li><a href="/about.html">Home</a></li>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="contactus.html">Contact Us</a></li>
        </ul>
    </div>
    </>
  )
}

export default MobileList