import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import CartPage from "../../pages/cartPage/cartPage";
import Header from "../header/header";
import ItemDescriptionPage from "../../pages/itemDescriptionPage/itemDescriptionPage";
import MainPage from "../../pages/mainPage/mainPage";
import PageNotFound from "../pageNotFound/pageNotFound";
import WontedPage from "../../pages/wontedPage/wontedPage";
import Modal from "../modal/modal";

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => localStorage.getItem('token')
            ? (<Component {...props}/>)
            :(<Redirect to={{pathname:"/favorites-page/login"}}/>)} />
    )
}

const RouterPages = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <PrivateRoute exact path='/favorites-page/' component={WontedPage}/>
                <Route exact path='/favorites-page/login' component={WontedPage}/>
                <Route exact path='/favorites-page/:id' component={ItemDescriptionPage}/>
                <Route exact path='/cart-page/' component={CartPage}/>
                <Route exact path='/categories/:category' component={MainPage}/>
                <Route exact path='/:id' component={ItemDescriptionPage}/>
                <Route exact path='/' component={MainPage} />
                <Route path='*' component={PageNotFound}/>
            </Switch>
            <Modal />
        </Router>
    )
}

export default RouterPages