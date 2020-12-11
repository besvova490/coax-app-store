import {combineReducers} from "redux";
import product from './products/productsReducer'
import wanted from './wanted/wantedsReducer'
import cart from './cart/cartReducer'

const rootReducer = combineReducers({
    product,
    wanted,
    cart
})

export default rootReducer