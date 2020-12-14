import React from "react";

const CartItem = ({item, index, addToCartList, delFromCartList, decFromCartList}) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.title.slice(0, 50)}...</td>
            <td>{item.quantity}</td>
            <td>${(item.quantity * item.price).toFixed(2)}</td>
            <td>
                <div className="cart-action-buttons">
                    <button className="cart-action-button"
                            onClick={() => addToCartList(item)}>
                        <i className="fa fa-plus-square-o" aria-hidden="true"/>
                    </button>
                    <button className="cart-action-button"
                            onClick={() => decFromCartList(item)}>
                        <i className="fa fa-minus-square-o" aria-hidden="true"/>
                    </button>
                    <button className="cart-action-button"
                            onClick={() => delFromCartList(item)}>
                        <i className="fa fa-trash-o" aria-hidden="true"/>
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default CartItem;