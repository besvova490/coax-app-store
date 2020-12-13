import * as types from './cartActionsTypes'

export function addToCartList(payload) {
    return {type: types.ADD_TO_CART_LIST, payload}
}

export function decFromCartList(payload) {
    return {type: types.DEC_IN_CART_LIST, payload}
}

export function delFromCartList(payload) {
    return {type: types.DEL_FROM_CART_LIST, payload}
}

export function updateCartList(payload) {
    const items = Object.keys(payload).map((key) => payload[key])
    let totalPrice = items.reduce((sum, product) => {
        sum += product.quantity * product.price;
        return sum;
        }, 0)
    totalPrice = totalPrice.toFixed(2)
    return {type: types.UPDATE_CART_LIST, payload: {totalPrice}}
}