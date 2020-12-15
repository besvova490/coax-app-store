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
    );
};

export default ProductsList;