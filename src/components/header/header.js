import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

import {userLogOutAction} from '../../redux/auth/authActions';

import './header.css';

const Header = ({isAuth, userLogOutAction, history}) => {
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
                {isAuth
                    ? <button className="sign-out" onClick={userLogOutAction}><i className="fa fa-sign-out" aria-hidden="true"/></button>
                    : <button className="sign-out" onClick={() => history.push("login")}><i className="fa fa-sign-in" aria-hidden="true"/></button>
                }
            </nav>
        </div>
    );
}
const mapStateToProps =  (state, ownProps) => {
    return {
        isAuth: state.auth.isAuth,
        history: ownProps.history
    }
}

const mapDispatchToProps = {
    userLogOutAction
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));