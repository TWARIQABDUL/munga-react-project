import React from 'react'

import closee from '/assets/icon-close.svg'
import { Link } from 'react-router-dom';
function MobileList({setStatus}) {
  return (
    <>
     <div className="mobile-menu-container ">
        <button className="close-menu" id="close" onClick={setStatus} ><img src={closee} alt=""/></button>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    </div>
    </>
  )
}

export default MobileList