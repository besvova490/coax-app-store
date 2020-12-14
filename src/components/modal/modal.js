import React from "react";
import ReactDOM from "react-dom"
import {connect} from "react-redux"

import AuthorizationForm from "../authorizationForm/authorizationFrom";

import './modal.css'

function Modal({showModal}) {
        if (!showModal) {
            return null
        }
        return ReactDOM.createPortal(
            <div className="modal">
                <div className="modal-content">
                    <AuthorizationForm />
                </div>
            </div>, document.getElementById('portal'));
}
const mapStateToProps = (state) => {
    return {showModal: state.modal.showModal}
}
export default connect(mapStateToProps,null)(Modal)