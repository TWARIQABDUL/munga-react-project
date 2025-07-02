import React from 'react'
import { Link } from 'react-router-dom'

function Navlink({label,target}) {
    return (
        <li><Link to="#" onClick={() => document.getElementById(target).scrollIntoView({ behavior: "smooth" })}>{label}</Link></li>

    )
}

export default Navlink