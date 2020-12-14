import React from 'react';

import './pageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="page-not-found col-12">
                    <h1 className="page-not-found-title">404</h1>
                    <p className="page-not-found-text">
                        Sorry but the page you are looking for does not exist, have been removed, name changed or is
                        temporarily unavailable
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;