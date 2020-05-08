import React from "react"

import './Navbar.scss'

const Navbar = ({ timerName }) => {
    return (
        <div className='container'>
            <p>{timerName}</p>
        </div>
    )
}

export default Navbar