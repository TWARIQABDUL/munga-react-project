import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer id="footer">
        <div className="company">
            <h3>Traver</h3>
            <p>Book your trip in minute, get full
                Control for much longer..</p>

        </div>
        <div className="links">
            <h3>Company</h3>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Career</Link></li>
                <li><Link to="/contact">Mobile</Link></li>
            </ul>
        </div>
        <div className="contact">
            <h3>Contact</h3>
            <ul>
                <li><Link to="">Help/FAQ</Link></li>
                <li><Link to="">Press</Link></li>
                <li><Link to="">Affiliates</Link></li>
            </ul>
        </div>
        <div className="more-stuf">
            <h3>More</h3>
            <ul>
                <li><Link to="#">Airline Fees</Link></li>
                <li><Link to="#">Airline</Link></li>
                <li><Link to="#">Low </Link> </li></ul>
        </div>
    </footer>
  )
}

export default Footer