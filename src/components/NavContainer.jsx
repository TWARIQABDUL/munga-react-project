import React, { useContext, useState } from 'react'

import menubtn from '/assets/icon-menu.svg'
import MobileList from '../utils/MobileList'
import { Link, useNavigate } from 'react-router-dom'
import Navlink from './Navlink'

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
                        <Navlink label={"Services"} target={"services"}/>
                        <Navlink label={"Department"} target={"department"}/>
                        <Navlink label={"Newsletter"} target={"news-lette"}/>
                        <Navlink label={"Site Map"} target={"footer"}/>
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