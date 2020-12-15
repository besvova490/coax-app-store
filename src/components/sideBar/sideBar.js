import React from "react";
import {withRouter} from "react-router";

import "./sideBar.css";

const SideBar = ({history, getByCategory, sortedBy, match}) => {

    const category = match.params.category || 'medical'

    const categoriesList = ['History', 'Science', 'Engineering', 'Medical', 'Arts']

    const liCategoryBuilder = (category) => {
        return (
            <li key={category}
                onClick={() => {history.push(`/categories/${category}`);
                getByCategory({q: `subject:${category}`})}}
                className="side-bar-li">{category}</li>
        )
    }

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
                        {categoriesList.map(liCategoryBuilder)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default withRouter(SideBar);