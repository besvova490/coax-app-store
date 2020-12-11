import * as types from './productsActionsTypes'

export function getAllProductsSuccessAction(payload){
    return {type: types.GET_PRODUCTS_ALL_SUCCESS, payload}
}

export function getAllProductsRequestAction(payload){
    return {type: types.GET_PRODUCTS_ALL_REQUEST, payload}
}

export function getProductsByCategorySuccessAction(payload){
    return {type: types.GET_PRODUCTS_BY_CATEGORY_SUCCESS, payload}
}

export function getProductsByCategoryRequestAction(payload){
    return {type: types.GET_PRODUCTS_BY_CATEGORY_REQUEST, payload}
}

export function sortedProducts(payload){
    return {type: types.SORTED_PRODUCTS, payload}
}