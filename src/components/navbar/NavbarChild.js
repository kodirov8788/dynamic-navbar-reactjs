import React, { useState } from 'react'

function NavbarChild({ nav, setOpen }) {
    const [visable, setVisable] = useState(false)
    const openFunc = () => {
        setOpen(true)
        setVisable(true)
    }
    const closeFunc = () => {
        setOpen(false)
        setVisable(false)
    }
    return (
        <li onMouseEnter={openFunc} onMouseLeave={closeFunc}>
            <a href="#">{nav.nav_name}</a>
            <div className="nav_child_element" style={visable ? { opacity: 1 } : { opacity: 0 }}>
                {nav.nav_items.map(nav_item => (
                    <li onMouseEnter={openFunc} onMouseLeave={closeFunc} style={visable ? { display: "flex" } : { display: "none" }}>
                        <a href="#">{nav_item.nav_child_name}</a>
                        <div className="nav_child_element_group">
                            {
                                nav_item.nav_child_items.map(nav_child_item => (
                                    <li>{nav_child_item.title}</li>
                                ))}
                        </div>
                    </li>
                ))}
            </div>
        </li>
    )
}

export default NavbarChild