import React from "react";
import {connect} from "react-redux";

import Loader from "../../components/loader/loader";
import ErrorItem from "../../components/errorItem/errorItem";

import {addToCartList} from "../../redux/cart/cartActions";
import {toggleToWantedList} from "../../redux/wanted/wantedsActions";
import {deleteProductFromStore, getAllProductByIdRequestAction} from "../../redux/item-product/item-productActions";

import "./itemDescriptionPage.css";

class ItemDescriptionPage extends React.Component {

    componentDidMount() {
        this.props.getAllProductByIdRequestAction({id: this.props.itemId});
    };

    componentWillUnmount() {
        this.props.deleteProductFromStore();
    };

    render() {
        const {isAuth, item, error, addToCartList, toggleToWantedList, processing} = this.props

        if (processing) {
            return <Loader />
        }
        if (error) {
            return <ErrorItem />
        }
        return (
            <div className="row">
                <div className="product-item col-8 col-md-10 col-sm-12">
                    <div className="item-image">
                        <img src={item.imageUrl} alt="..."/>
                    </div>
                    <div className="product-content">
                        <div className="row">
                            <div className="item-body col-8">
                                <h4>{item.title}</h4>
                                <ul className="product-content-ul">
                                    <li className="product-content-li"><span>Author: </span><span>{item.author}</span>
                                    </li>
                                    <li className="product-content-li">
                                        <span>Categories: </span><span>{item.categories}</span></li>
                                    <li className="product-content-li">
                                        <span>Published Date: </span><span>{item.publishedDate}</span>
                                    </li>
                                </ul>
                                <p>{item.description.replace(/<[^>]*>?/gm, '')}</p>
                            </div>
                            <div className="product-buy-info col-4">
                                <h4>Price: $ {item.price}</h4>
                                <div className="item-buttons description-page">
                                    <button type="button"
                                            className="item-button buttom-add-to-cart"
                                            onClick={() => addToCartList(item)}>Add to cart
                                    </button>
                                    <span className="vertical-line"/>
                                    {isAuth ?
                                        (<button type="button"
                                                       className="item-button button-heart"
                                                       onClick={() => toggleToWantedList(item)}>
                                            <i className="fa fa-heart" aria-hidden="true"/>
                                        </button>)
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemId: ownProps.match.params.id,
        item: state.productReducer.itemProduct,
        isAuth: state.auth.isAuth,
        error: state.productReducer.error,
        processing: state.productReducer.processing,
    }

}

const mapDispatchToProps = {
    addToCartList,
    deleteProductFromStore,
    toggleToWantedList,
    getAllProductByIdRequestAction}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDescriptionPage);