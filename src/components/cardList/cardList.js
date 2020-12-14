import React from "react";

import CartItem from "../cartItem/cartItem";
import './cardList.css';



class CardList extends React.Component {
    componentDidMount() {
        this.props.updateCartList(this.props.itemsCard)
    }

    componentDidUpdate() {
        this.props.updateCartList(this.props.itemsCard)
    }

    render() {
        const {itemsCard, totalPrice, addToCartList, delFromCartList, decFromCartList} = this.props
        const items = Object.keys(itemsCard).map((key) => itemsCard[key])
        return (
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Title</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.map((item, index) => <CartItem
                            key={item.id}
                            item={item}
                            index={index}
                            addToCartList={addToCartList}
                            delFromCartList={delFromCartList}
                            decFromCartList={decFromCartList}/>)
                    }
                    </tbody>
                </table>
                <div className="cart-total-price"><span>Total: $</span><span>{totalPrice}</span></div>
            </div>
        );
    }
}

export default CardList;