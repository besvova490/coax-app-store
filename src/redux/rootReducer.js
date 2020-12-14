import {combineReducers} from "redux";
import product from './products/productsReducer'
import wanted from './wanted/wantedsReducer'
import cart from './cart/cartReducer'
import productReducer from './item-product/item-productReducer'
import auth from './auth/authReducer'
import modal from './modal/modalReducer'

const rootReducer = combineReducers({
    auth,
    modal,
    product,
    wanted,
    cart,
    productReducer
})

export default rootReducer