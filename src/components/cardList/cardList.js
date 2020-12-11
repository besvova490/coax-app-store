import React from "react";

import './cardList.css';

const ItemCart = ({item, index, addToCartList, delFromCartList, decFromCartList}) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.volumeInfo.title}</td>
            <td>{item.quantity}</td>
            <td>${(item.quantity * item.saleInfo.listPrice.amount).toFixed(2)}</td>
            <td>
                <div className='action-buttons'>
                    <button className='fa-button plus' onClick={() => addToCartList(item)}><i className="fa fa-plus-square-o" aria-hidden="true"/></button>
                    <button className='fa-button minus' onClick={() => decFromCartList(item)}><i className="fa fa-minus-square-o" aria-hidden="true"/></button>
                    <button className='fa-button trash' onClick={() => delFromCartList(item)}><i className="fa fa-trash-o" aria-hidden="true"/></button>
                </div>
            </td>
        </tr>
    );
}

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
            <div className="col-md-10 offset-md-1">
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
                        items.map((item, index) => <ItemCart
                            key={item.id}
                            item={item}
                            index={index}
                            addToCartList={addToCartList}
                            delFromCartList={delFromCartList}
                            decFromCartList={decFromCartList}/>)
                    }
                    </tbody>
                </table>
                <div className='total-amount'><span>Total: ${totalPrice}</span></div>
            </div>
        );
    }
}

export default CardList;