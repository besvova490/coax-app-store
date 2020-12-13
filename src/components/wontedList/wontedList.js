import React from "react";
import {connect} from "react-redux"

import ProductsItems from "../productsItems/productsItems";
import SearchForm from "../searchForm/searchForm";

import {toggleToWantedList} from "../../redux/wanted/wantedsActions";
import {addToCartList} from "../../redux/cart/cartActions";

class WontedList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }
    handleChange = (event) => {
        this.setState({search: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
    }
    render() {
        const {booksItems, toggleToWantedList, addToCartList} = this.props
        const {search} = this.state
        const {wantedList} = booksItems
        const filteredProducts = wantedList.filter(item => {return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1})
        if (!filteredProducts.length) {
            return (
                <div className='row'>
                    <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={search}/>
                    <h1 className='col-12 text-center'>Now results</h1>
                </div>
            )
        }
        return (
            <div className='container'>
                <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={search}/>
                <div className='row'>
                    {
                        filteredProducts.map(item => <ProductsItems itemBook={item}
                                                              key={item.id}
                                                              buttonLabel='Remove'
                                                              toggleWantedList={toggleToWantedList}
                                                              addToCartList={addToCartList} wantedItems={[]}
                                                              itemsBooks={wantedList}/>)
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({...state}) => {
    return {booksItems: state.wanted}
}
export default connect(mapStateToProps, {toggleToWantedList, addToCartList})(WontedList);