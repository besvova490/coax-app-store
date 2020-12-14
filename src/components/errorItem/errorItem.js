import React from 'react';

import './errorItem.css';

const ErrorItem = () => {
    return(
        <div className="error-item-div">
            <div className="alert alert-danger" role="alert">
                Oy it's looks bad, but you still can use our store
            </div>
        </div>
    );
};

export default ErrorItem;