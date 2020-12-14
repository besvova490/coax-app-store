import React from "react";
import {connect} from "react-redux"

import {userLogInAction} from '../../redux/auth/authActions'
import {toggleModal} from "../../redux/modal/modalActions";
import './authorizationForm.css'

class AuthorizationForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.userLogInAction()
        this.props.toggleModal()
    }
    render() {
        return (
            <form className="authorization-form" onSubmit={this.handleSubmit}>
                <div className="authorization-form-group">
                    <input type="email" className="from-input" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="authorization-form-group">
                    <input type="password" className="from-input" placeholder="Password"/>
                </div>
                <button type="submit" className="button-form">Log In <i className="fa fa-sign-in" aria-hidden="true"/>
                </button>
            </form>
        )
    }
}

export default connect(null, {userLogInAction, toggleModal})(AuthorizationForm)