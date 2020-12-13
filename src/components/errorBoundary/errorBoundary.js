import React from 'react';

import './errorBoundary.css'

export default class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="row">
                    <div className="error-body col-12">
                        <h1>Books store is not available now</h1>
                        <p>Something bad has happened with your favorite bookstore is currently unavailable, but we already started to fixed it. See you soon. </p>
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}