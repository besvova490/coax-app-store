import React from "react";
import ProductsItems from "../productsItems/productsItems";
import InfiniteScroll from 'react-infinite-scroller';
let startIndex = 10
const ProductsList = ({productsBooks, toggleWantedList, addToCartList, getAllProductsRequestAction}) => {
    const loadMore = () => {
        getAllProductsRequestAction({startIndex: startIndex})
        startIndex += 10
    }
    return (
        <div className='container'>
            <div className='row'>
                <InfiniteScroll loadMore={loadMore} hasMore={true} loader={<div className="loader" key={0}>Loading ...</div>}>
                {
                    productsBooks.map(item => <ProductsItems key={item.id}
                                                     itemBook={item}
                                                     buttonLabel='Add to wanted'
                                                     toggleWantedList={toggleWantedList}
                                                     addToCartList={addToCartList}/>)
                }
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default ProductsList