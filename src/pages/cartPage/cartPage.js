import React from "react";
import {connect} from "react-redux"

import {addToCartList, delFromCartList, decFromCartList, updateCartList} from '../../redux/cart/cartActions'

import CardList from "../../components/cardList/cardList";

const CartPage = ({ itemsCard, totalPrice, addToCartList, delFromCartList, decFromCartList, updateCartList}) => {
    return (
        <div className="cart-page">
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
    )(CartPage);