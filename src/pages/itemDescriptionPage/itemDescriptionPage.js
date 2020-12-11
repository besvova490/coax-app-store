import React from "react";
import {connect} from 'react-redux'

const ItemDescriptionPage = ({itemId, itemsBooks}) => {
    const item = itemsBooks[itemId]
    return (
        <div className="card col-mb-10">
            <img src={item.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.volumeInfo.title}</h5>
                <p className="card-text"><small className="text-muted">{item.volumeInfo.publisher}</small></p>
                <p className="card-text">{item.volumeInfo.description}</p>
            </div>
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        itemId: ownProps.match.params.id,
        itemsBooks: state.product.allProducts}
}
export default connect(mapStateToProps, null)(ItemDescriptionPage);