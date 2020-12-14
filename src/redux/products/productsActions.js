import * as types from './productsActionsTypes';
import serializerApiData from '../../helpers/serializer';

export function getAllProductsRequestAction(payload){
    return {type: types.GET_PRODUCTS_ALL_REQUEST, payload}
}

export function getAllProductsSuccessAction(payload){
    return {type: types.GET_PRODUCTS_ALL_SUCCESS, payload: payload.map(serializerApiData)}
}

export function getAllBooksInfinityScroll(payload){
    return {type: types.GET_PRODUCTS_ALL_INFINITY_SCROLL_SUCCESS, payload: payload.map(serializerApiData)}
}

export function getProductsByCategoryRequestAction(payload){
    return {type: types.GET_PRODUCTS_BY_CATEGORY_REQUEST, payload}
}

export function getProductsByCategorySuccessAction(payload){
    return {type: types.GET_PRODUCTS_BY_CATEGORY_SUCCESS, payload: payload.map(serializerApiData)}
}

export function getAllBooksInfinityScrollRequestAction(payload){
    return {type: types.GET_PRODUCTS_ALL_INFINITY_SCROLL_REQUEST, payload}
}

export function getSortedProductsRequestAction(payload){
    return {type: types.GET_SORTED_PRODUCTS_REQUEST, payload}
}

export function getSortedProductsSuccessAction(payload){
    return {type: types.GET_SORTED_PRODUCTS_SUCCESS, payload: payload.map(serializerApiData)}
}

export function apiRequestError(){
    return {type: types.API_ERROR}
}