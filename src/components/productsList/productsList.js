import React from "react";
import ProductsItems from "../productsItems/productsItems";

const ProductsList = ({productsBooks, toggleWantedList}) => {
    return (
        <div className='container'>
            <div className='row'>
                {
                    productsBooks.map(item => <ProductsItems key={item.id} itemBook={item} buttonLabel='Add to wanted' toggleWantedList={toggleWantedList}/>)
                }
            </div>
        </div>
    );
}

export default ProductsList