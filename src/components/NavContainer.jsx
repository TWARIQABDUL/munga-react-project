import React, { useState } from 'react'


import menubtn from '../assets/icon-menu.svg'
import MobileList from '../utils/MobileList'
function NavContainer() {
    const [isVisible, setNavVisible] = useState(false)
    const tagleMenu = ()=>{ setNavVisible(!isVisible) }
    return (
        <>
            <header id="header">
                <nav>
                    <h1>traver</h1>
                    <ul>
                        <li><a href="#services">Service</a></li>
                        <li><a href="#department">Department</a></li>
                        <li><a href="#news-lette">Newsleter</a></li>
                        <li><a href="#footer">Site Map</a></li>
                    </ul>
                    <div className="buttons_auth">
                        <button id="register">Signup</button>
                        <button className="mobile-menu" id="menu" onClick={() => tagleMenu()}> <img src={menubtn} alt="" /></button>
                    </div>

                </nav>
            </header>

            {isVisible && <MobileList setStatus={tagleMenu} />}

        </>
    )
}

export default NavContainer