import React from "react";
import {withRouter} from "react-router";

import "./sideBar.css";

const SideBar = ({history, getByCategory, sortedBy, match}) => {
    const category = match.params.category || 'history'
    return (
        <div className="col col-2 side-bar">
            <div className="side-bar-main">
                <div className="side-bar-sorted">
                    <h5>Sorted by:</h5>
                    <ul className="side-bar-sorted-ul">
                        <li className="side-bar-sorted-li">
                            <span>by relevance: </span>
                            <div className="side-bar-sorted-div">
                                <button className="side-bar-sorted-button" onClick={() => sortedBy({orderBy: 'relevance', q: `subject:${category}`})}>
                                    <i className="fa fa-sort" aria-hidden="true"/>
                                </button>
                            </div>
                        </li>
                        <li className="side-bar-sorted-li">
                            <span>by newest:</span>
                            <div className="side-bar-sorted-div">
                                <button className="side-bar-sorted-button" onClick={() => sortedBy({orderBy: 'newest', q: `subject:${category}`})}>
                                    <i className="fa fa-sort" aria-hidden="true"/>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="side-bar-categories">
                    <h5>Categories:</h5>
                    <ul className="side-bar-ul">
                        <li onClick={() => {history.push('/categories/history'); getByCategory({q: 'subject:history'})}} className="side-bar-li">History</li>
                        <li onClick={() => {history.push('/categories/science'); getByCategory({q: 'subject:science'})}} className="side-bar-li">Science</li>
                        <li onClick={() => {history.push('/categories/Engineering'); getByCategory({q: 'subject:Engineering'})}} className="side-bar-li">Engineering</li>
                        <li onClick={() => {history.push('/categories/Medical'); getByCategory({q: 'subject:Medical'})}} className="side-bar-li">Medical</li>
                        <li onClick={() => {history.push('/categories/Arts'); getByCategory({q: 'subject:Arts'})}} className="side-bar-li">Arts</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default withRouter(SideBar);