import React, { useState } from 'react'
import "./Navbar.css"
import { nav_data } from '../../statis_data'
import NavbarChild from './NavbarChild'

function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <div className='navbar'>
            <ul>
                {
                    nav_data.map(nav => (
                        <NavbarChild nav={nav} setOpen={setOpen} />
                    ))
                }
                <div className="background_effect"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    style={open ? { height: "60vh" } : { height: "0" }}></div>

            </ul>
        </div>
    )
}

export default Navbar