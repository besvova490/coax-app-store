import React from "react";
import './productsItems.css'
import {withRouter} from 'react-router-dom'
const ProductsItems = ({itemBook, toggleWantedList, addToCartList, buttonLabel, history}) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 image-div">
                    <img src={itemBook.volumeInfo.imageLinks.thumbnail} alt='...'/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => {history.push(itemBook.id)}}>{itemBook.volumeInfo.title}</h5>
                        <p className="card-text"><small className="text-muted">{itemBook.volumeInfo.publisher}</small></p>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <span>Prise: $ {itemBook.saleInfo.listPrice.amount}</span>
                        <hr/>
                        <div className='button-div'>
                            <button type="button" className="add-to-card-button add-to-button" onClick={() => addToCartList(itemBook)}>Add to card</button>
                            <button type="button" className="add-to-wonted-button add-to-button" onClick={() => toggleWantedList(itemBook)}>{buttonLabel}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(ProductsItems);