import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'
const Header = () => {
    return (
        <nav className="nav-bar-menu">
            <Link className="nav-bar-menu-item" aria-current="page" to="/">Home</Link>
            <Link className="nav-bar-menu-item" to="/wanted-page/">Wanted</Link>
            <Link className="nav-bar-menu-item nav-bar-card" to="/card-page/"><i className="fa fa-shopping-basket" aria-hidden="true"/></Link>
        </nav>
    );
}

export default Header;