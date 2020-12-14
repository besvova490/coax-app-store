import React from "react";
import WontedList from "../../components/wontedList/wontedList";
import {connect} from "react-redux"
import {toggleModal} from "../../redux/modal/modalActions";

class WontedPage extends React.Component {
    componentDidMount() {
        if (!this.props.isAuth){
            this.props.toggleModal()
        }
    }
    render() {
        return (
            <div>
                <WontedList/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}
export default connect(mapStateToProps, {toggleModal})(WontedPage);