import React, { useContext, useState } from 'react'

import menubtn from '/assets/icon-menu.svg'
import MobileList from '../utils/MobileList'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './Context'


function NavContainer() {
    const [isVisible, setNavVisible] = useState(false)
    const tagleMenu = () => { setNavVisible(!isVisible) }
    const navigate = useNavigate()
    return (
        <>
            <header id="header">
                <nav>
                    <h1>traver </h1>
                    <ul>
                        <li><Link to="#services"onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>Services</Link></li>
                        <li><Link to="#department" onClick={() => document.getElementById("department").scrollIntoView({ behavior: "smooth" })}>Department</Link></li>
                        <li><Link to="#news-lette" onClick={() => document.getElementById("news-lette").scrollIntoView({ behavior: "smooth" })}>Newsleter</Link></li>
                        <li><Link to="#footer" onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}>Site Map</Link></li>
                    </ul>
                    <div className="buttons_auth">
                        <button id="register" onClick={() => navigate('/register')}>Signup</button>
                        <button className="mobile-menu" id="menu" onClick={() => tagleMenu()}> <img src={menubtn} alt="" /></button>
                    </div>

                </nav>
            </header>

            {isVisible && <MobileList setStatus={tagleMenu} />}

        </>
    )
}

export default NavContainer