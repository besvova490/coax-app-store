import React from "react";
import ReactDOM from "react-dom"
import Redirect from "react-router-dom"
import {connect} from "react-redux"

import AuthorizationForm from "../authorizationForm/authorizationFrom";
import {toggleModal} from "../../redux/modal/modalActions"

import './modal.css'


class Modal extends React.Component {

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            if (!this.props.isAuth) {
            }else {
                this.props.toggleModal()
            }
        }
    }
    render() {
        const {showModal} = this.props
        if (!showModal) {
            return null
        }
        return ReactDOM.createPortal(
            <div className="modal">
                <div className="modal-content" ref={this.setWrapperRef}>
                    <AuthorizationForm closeModal={this.props.toggleModal}/>
                    <button onClick={this.props.toggleModal}>close</button>
                </div>
            </div>, document.getElementById('portal'));
    };
}
const mapStateToProps = (state) => {
    return {showModal: state.modal.showModal, isAuth: state.auth.isAuth}
}
export default connect(mapStateToProps,{toggleModal})(Modal)