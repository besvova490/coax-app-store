import React from 'react'
import {Link} from 'react-router-dom'


import './header.css'
const Header = () => {
    return (
        <div className="row naw-bar">
            <div className="store-logo col-2">
                <Link to={{
                    pathname: "/",
                    state: {}
                }}>Side bar <i className="fa fa-book" aria-hidden="true"/></Link>
            </div>
            <nav className="nav-menu col-10">
                <Link to={{
                    pathname: "/",
                    state: {}
                }}>Home</Link>
                <Link to="/favorites-page/">Favorites</Link>
                <Link to="/cart-page/"><i className="fa fa-shopping-basket" aria-hidden="true"/></Link>
            </nav>
        </div>
    );
}

export default Header;