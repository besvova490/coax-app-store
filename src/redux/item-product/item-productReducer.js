import * as types from './item-productActionsTypes';

const initialState = {
    error: false,
    processing: true,
    itemProduct: {},
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_PRODUCTS_BY_ID_SUCCESS: {
            return {
                ...state, itemProduct: {...action.payload}, processing: false, error: false,
            }
        }
        case types.DEL_PRODUCTS_FROM_STORE: {
            return {...initialState}
        }
        case types.API_ERROR: {
            return {
                ...state, processing: false, error: true
            }
        }
        default:
            return state
    }
}