import React from "react";
import {connect} from "react-redux"

import {userLogInAction} from '../../redux/auth/authActions'
import {closeModal} from "../../redux/modal/modalActions";
import './authorizationForm.css'
import {Link} from "react-router-dom";

class AuthorizationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: false,
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.email && this.state.password){
            this.props.userLogInAction()
            this.props.closeModal()
        } else {
            this.setState({error: true})
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <form className="authorization-form" onSubmit={this.handleSubmit}>
                {this.state.error && <div className='error-form'><p>Fields can't be empty</p></div>}
                <div className="authorization-form-group">
                    <input type="email" className="from-input" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} name='email'/>
                </div>
                <div className="authorization-form-group">
                    <input type="password" className="from-input" placeholder="Password" onChange={this.handleChange} name='password'/>
                </div>
                <div className='form-buttons'>
                    <button className="button-form"><Link to='/' onClick={this.props.closeModal}>Go to store</Link></button>
                    <button type="submit" className="button-form">Log In <i className="fa fa-sign-in" aria-hidden="true"/>
                    </button>
                </div>
            </form>
        )
    }
}

export default connect(null, {userLogInAction, closeModal})(AuthorizationForm)