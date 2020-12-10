import React from "react";

import './sideBar.css'

const SideBar = () => {
    return (
        <div className="sidebar-wrapper col-md-2">
            <div className="sidebar-div sidebar-search-div">
                <input className="sidebar-search-input" type="text" placeholder="Sms search"/>
                <i className="fa fa-search" aria-hidden="true"/>
            </div>
            <div className="sidebar-div sidebar-filter-div"><h6>Filter</h6></div>
            <div className="sidebar-div sidebar-categories-div"><h6>Categories</h6></div>
        </div>
    );
}

export default SideBar