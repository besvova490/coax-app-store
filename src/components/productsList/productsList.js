import React from "react";
import InfiniteScroll from 'react-infinite-scroller';

import ErrorItem from "../errorItem/errorItem";
import ProductsItems from "../productsItems/productsItems";
import Loader from "../loader/loader";

const ProductsList = ({startIndex, productsBooks, toggleWantedList, addToCartList, getAllProductsRequestAction, wantedItems, error, isAuth}) => {
    if (error) {
        return <ErrorItem/>
    }

    return (
        <React.Fragment>
            <InfiniteScroll className='row items-list'
                            initialLoad={false}
                            hasMore={!error}
                            loader={<Loader key={"loader"}/>}
                            loadMore={() => {getAllProductsRequestAction({startIndex: startIndex})}}>
            {
                productsBooks.map(item => <ProductsItems key={item.id}
                                                 itemBook={item}
                                                 buttonLabel='Add to wanted'
                                                 toggleWantedList={toggleWantedList}
                                                 addToCartList={addToCartList}
                                                 wantedItems={wantedItems}
                                                 isAuth={isAuth}/>)
            }
            </InfiniteScroll>
            <div className="arrow-to-top" onClick={() => window.scrollTo(0,0)}>
                <i className="fa fa-chevron-circle-up" aria-hidden="true"/>
            </div>
        </React.Fragment>
    );
};

export default ProductsList;