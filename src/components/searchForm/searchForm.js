import React from "react";

import "./searchForm.css";

const SearchForm = ({handleChange, handleSubmit, value}) => {
    return (
        <div className="nav-bar-search col-12">
            <form className="nav-bar-search-from" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search items"
                       value={value}
                       onChange={handleChange}/>
                <button className="nav-bar-button-search" type="submit">
                    <i className="fa fa-search" aria-hidden="true"/>
                </button>
            </form>
        </div>
    );
};

export default SearchForm;