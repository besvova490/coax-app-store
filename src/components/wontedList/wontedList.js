import React from "react";
import {connect} from "react-redux"
import ProductsItems from "../productsItems/productsItems";
import {delFromWantedList} from "../../redux/wanted/wantedsActions";

const WontedList = ({booksItems, delFromWantedList}) => {
    return (
        <div className='container'>
        <div className='row'>
            {
                booksItems.wantedList.map(item => <ProductsItems itemBook={item} key={item.id} buttonLabel='Remove' toggleWantedList={delFromWantedList}/>)
            }
        </div>
        </div>
    );
}
const mapStateToProps = ({...state}) => {
    return {booksItems: state.wanted}
}
export default connect(mapStateToProps, {delFromWantedList})(WontedList);