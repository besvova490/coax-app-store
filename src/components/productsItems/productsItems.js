import React from "react";
import './productsItems.css'
import {Link} from "react-router-dom";

const ProductsItems = ({itemBook, toggleWantedList, addToCartList, wantedItems}) => {
    const {id, title, imageUrl, price, author, description, publishedDate} = itemBook
    const iClass = wantedItems.find(item => item.id === id) ? 'fa fa-heart fa-favorite' : 'fa fa-heart-o'
    return (
        <div className="card col-3" key={id}>
            <div className="img-item">
                <Link to={`/${id}`}><img src={imageUrl} alt="..."/></Link>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    <small className="text-muted">Authors: {author}</small>
                </p>
                <p className="card-text">
                    <small className="text-muted">Published Date: {publishedDate}</small>
                </p>
                <p className="card-text">{description.slice(0, 100)}...</p>
            </div>
            <div className="card-footer">
                <p className="card-price">${price}</p>
                <div className="item-buttons product-list">
                    <button type="button"
                            className="item-button buttom-add-to-cart"
                            onClick={() => addToCartList(itemBook)}>Add to cart</button>
                    <span className="vertical-line"/>
                    <button type="button"
                            className="item-button button-heart"
                            onClick={() => toggleWantedList(itemBook)}>
                        <i className={iClass} aria-hidden="true"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductsItems;