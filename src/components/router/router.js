import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import CartPage from "../../pages/cartPage/cartPage";
import Header from "../header/header";
import ItemDescriptionPage from "../../pages/itemDescriptionPage/itemDescriptionPage";
import MainPage from "../../pages/mainPage/mainPage";
import PageNotFound from "../pageNotFound/pageNotFound";
import WontedPage from "../../pages/wontedPage/wontedPage";


const RouterPages = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path='/favorites-page/' component={WontedPage}/>
                <Route exact path='/cart-page/' component={CartPage}/>
                <Route exact path='/favorites-page/:id' component={ItemDescriptionPage}/>
                <Route exact path='/categories/:category' component={MainPage}/>
                <Route exact path='/:id' component={ItemDescriptionPage}/>
                <Route exact path='/' component={MainPage} />
                <Route path='*' component={PageNotFound}/>
            </Switch>
        </Router>
    )
}

export default RouterPages