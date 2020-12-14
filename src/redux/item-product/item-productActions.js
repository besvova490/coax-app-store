import * as types from './item-productActionsTypes';
import serializerApiData from '../../helpers/serializer';

export function getAllProductByIdRequestAction(payload){
    return {type: types.GET_PRODUCTS_BY_ID_REQUEST, payload}
}

export function getAllProductByIdSuccessAction(payload){
    return {type: types.GET_PRODUCTS_BY_ID_SUCCESS, payload: serializerApiData(payload)}
}

export function deleteProductFromStore(){
    return {type: types.DEL_PRODUCTS_FROM_STORE}
}

export function getProductApiError(){
    return {type: types.API_ERROR}
}