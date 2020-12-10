import React from "react";
import {connect} from "react-redux"

import ProductsList from "../../components/productsList/productsList";
import SideBar from "../../components/sideBar/sideBar";

import {getAllProductsRequestAction} from '../../redux/products/productsActions'
import {addToWantedList} from '../../redux/wanted/wantedsActions'

class MainPage extends React.Component {
    componentDidMount() {
        this.props.getAllProductsRequestAction()
    }

    render() {
        const {addToWantedList} = this.props
        if (this.props.processing) {
            return <h2>Loading ....</h2>
        }
        return (
            <div className='row'>
                <SideBar/>
                <div className='col-md-10'>
                    <ProductsList productsBooks={this.props.allProducts} toggleWantedList={addToWantedList}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {...state.product}
}

export default connect(mapStateToProps, {getAllProductsRequestAction, addToWantedList})(MainPage);