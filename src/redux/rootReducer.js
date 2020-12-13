import {combineReducers} from "redux";
import product from './products/productsReducer'
import wanted from './wanted/wantedsReducer'
import cart from './cart/cartReducer'
import productReducer from './item-product/item-productReducer'

const rootReducer = combineReducers({
    product,
    wanted,
    cart,
    productReducer
})

export default rootReducer