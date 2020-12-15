import React from "react";
import WontedList from "../../components/wontedList/wontedList";
import {connect} from "react-redux";

import {openModal} from "../../redux/modal/modalActions";

class WontedPage extends React.Component {
    componentDidMount() {
        if (!this.props.isAuth){
            this.props.openModal();
        }
    };
    render() {
        return (
            <div className="wanted-page">
                <WontedList isAuth={this.props.isAuth}/>
            </div>
        );
    };
}
const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth};
};
const mapDispatchToProps = {
    openModal
};
export default connect(mapStateToProps, mapDispatchToProps)(WontedPage);