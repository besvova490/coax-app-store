import React from "react";
import {connect} from "react-redux"

import {addToCartList, delFromCartList, decFromCartList, updateCartList} from '../../redux/cart/cartActions'

import CardList from "../../components/cardList/cardList";

const CardPage = ({ itemsCard, totalPrice, addToCartList, delFromCartList, decFromCartList, updateCartList}) => {
    return (
        <div>
            <h1>Card Page</h1>
            <CardList itemsCard={itemsCard}
                      totalPrice={totalPrice}
                      addToCartList={addToCartList}
                      delFromCartList={delFromCartList}
                      decFromCartList={decFromCartList}
                      updateCartList={updateCartList}/>
        </div>);
};
const mapStateToProps = (state) => {
    return {
        itemsCard: state.cart.cartList,
        totalPrice: state.cart.totalPrice
    }
}

export default connect(mapStateToProps,
    {addToCartList, delFromCartList, decFromCartList, updateCartList}
    )(CardPage);