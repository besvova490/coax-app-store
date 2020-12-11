import React from "react";
import {connect} from "react-redux"

import ProductsList from "../../components/productsList/productsList";
import SideBar from "../../components/sideBar/sideBar";

import {getAllProductsRequestAction, getProductsByCategoryRequestAction, sortedProducts} from '../../redux/products/productsActions'
import {addToWantedList} from '../../redux/wanted/wantedsActions'
import {addToCartList} from '../../redux/cart/cartActions'

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }
    componentDidMount() {
        this.props.getAllProductsRequestAction({startIndex: 0})
    }

    onChangeInput = (event) => {
        this.setState({search: event.target.value})
    }
    compareItemPrice = (itemA, itemB) => {
        return itemA.saleInfo.listPrice.amount - itemB.saleInfo.listPrice.amount
    }
    sortItemsByPrice = (action, items) => {
        action(items.sort(this.compareItemPrice))
    }
    render() {
        const {
            addToWantedList,
            addToCartList,
            getAllProductsRequestAction,
            allProducts,
            getProductsByCategoryRequestAction,
            sortedProducts
        } = this.props
        const { search } = this.state
        if (this.props.processing) {
            return <h2>Loading ....</h2>
        }
        const items = Object.keys(allProducts).map((key) => allProducts[key])
        const filteredProducts = items.filter(item => {return item.volumeInfo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1})
        if (!filteredProducts.length) {
            return (
                <div className='row'>
                    <SideBar onChangeInput={this.onChangeInput}/>
                    <h1>Now results</h1>
                </div>
            )
        }
        return (
            <div className='row'>
                <SideBar onChangeInput={this.onChangeInput}
                         getByCategory={getProductsByCategoryRequestAction}
                         sortedByPrice={() => this.sortItemsByPrice(sortedProducts, items)}/>
                <div className='col-md-10'>
                        <ProductsList productsBooks={filteredProducts}
                                      toggleWantedList={addToWantedList}
                                      addToCartList={addToCartList}
                                      getAllProductsRequestAction={getAllProductsRequestAction}
                                      sortedProducts={sortedProducts}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {...state.product}
}

export default connect(
    mapStateToProps,
    {getAllProductsRequestAction, addToWantedList, addToCartList, getProductsByCategoryRequestAction, sortedProducts}
    )(MainPage);