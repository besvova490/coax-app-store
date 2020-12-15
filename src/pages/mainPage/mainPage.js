import React from "react";
import {connect} from "react-redux";

import ProductsList from "../../components/productsList/productsList";
import SideBar from "../../components/sideBar/sideBar";
import SearchForm from "../../components/searchForm/searchForm";

import {addToCartList} from "../../redux/cart/cartActions";
import {openModal} from "../../redux/modal/modalActions";
import {toggleToWantedList} from "../../redux/wanted/wantedsActions";
import * as actions from "../../redux/products/productsActions";

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            search: "",
        };
    };
    componentDidMount() {
        this.props.location.state = undefined;
        if(!this.props.match.params.category) {
            this.props.getAllProductsRequestAction({startIndex: 0});
        }else {
            this.props.getProductsByCategoryRequestAction({startIndex: 0, q: `subject:${this.props.match.params.category}`});
        }
        if (this.props.location.pathname.includes('login')) {
            this.props.openModal()
        }
    };
    componentDidUpdate() {
        if (this.props.location.state) {
            window.scrollTo(0, 0)
            this.props.getAllProductsRequestAction({startIndex: 0});
            this.props.location.state = undefined;
        }
        if (this.props.location.pathname.includes('login') && !this.props.isAuth) {
            this.props.openModal()
        }
    };

    handleChange = (event) => {
        this.setState({search: event.target.value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getAllProductsRequestAction({startIndex: 0, q: this.state.search});
        this.setState({search: ""});
    };

    render() {
        const {
            isAuth,
            addToCartList,
            allProducts,
            error,
            getAllBooksInfinityScrollRequestAction,
            getProductsByCategoryRequestAction,
            getSortedProductsRequestAction,
            startIndex,
            sortedProducts,
            toggleToWantedList,
            wantedItems,
        } = this.props;
        return (
            <div className='row main-div'>
                <SideBar getByCategory={getProductsByCategoryRequestAction}
                         sortedBy={getSortedProductsRequestAction}/>
                <div className='col-md-10 main-page-content offset-2'>
                    <SearchForm handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                value={this.state.search}/>
                    <ProductsList productsBooks={allProducts}
                                  toggleWantedList={toggleToWantedList}
                                  addToCartList={addToCartList}
                                  getAllProductsRequestAction={getAllBooksInfinityScrollRequestAction}
                                  sortedProducts={sortedProducts}
                                  wantedItems={wantedItems}
                                  error={error}
                                  startIndex={startIndex}
                                  isAuth={isAuth}/>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        error: state.product.error,
        allProducts: state.product.allProducts,
        wantedItems: state.wanted.wantedList,
        isAuth: state.auth.isAuth,
        startIndex: state.product.startIndex
    }
};

const mapDispatchToProps = {
    ...actions,
    addToCartList,
    toggleToWantedList,
    openModal
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);