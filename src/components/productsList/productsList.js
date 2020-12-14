import React from "react";
import InfiniteScroll from "react-infinite-scroller";

import ErrorItem from "../errorItem/errorItem";
import ProductsItems from "../productsItems/productsItems";
import Loader from "../loader/loader";

const ProductsList = ({productsBooks, toggleWantedList, addToCartList, getAllProductsRequestAction, wantedItems, error}) => {
    let startIndex = 12

    const loadMore = () => {
        getAllProductsRequestAction({startIndex: startIndex})
        startIndex += 12
    }

    if (error) {
        return <ErrorItem/>
    }

    return (
        <InfiniteScroll className='row items-list' loadMore={loadMore} hasMore={!error} loader={<Loader key={"loader"}/>}>
        {
            productsBooks.map(item => <ProductsItems key={item.id}
                                             itemBook={item}
                                             buttonLabel='Add to wanted'
                                             toggleWantedList={toggleWantedList}
                                             addToCartList={addToCartList}
                                             wantedItems={wantedItems}/>)
        }
        </InfiniteScroll>
    );
};

export default ProductsList;