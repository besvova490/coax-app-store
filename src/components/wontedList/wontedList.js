import React from "react";
import {connect} from "react-redux"
import ProductsItems from "../productsItems/productsItems";
import {delFromWantedList} from "../../redux/wanted/wantedsActions";
import {addToCartList} from "../../redux/cart/cartActions";

const WontedList = ({booksItems, delFromWantedList, addToCartList}) => {
    const { wantedList } = booksItems
    const items = Object.keys(wantedList).map((key) => wantedList[key])
    return (
        <div className='container'>
        <div className='row'>
            {
                items.map(item => <ProductsItems itemBook={item}
                                                 key={item.id}
                                                 buttonLabel='Remove'
                                                 toggleWantedList={delFromWantedList}
                                                 addToCartList={addToCartList}/>)
            }
        </div>
        </div>
    );
}
const mapStateToProps = ({...state}) => {
    return {booksItems: state.wanted}
}
export default connect(mapStateToProps, {delFromWantedList, addToCartList})(WontedList);