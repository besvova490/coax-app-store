import * as types from './productsActionsTypes';

const initialState = {
    error: false,
    processing: true,
    allProducts: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_PRODUCTS_ALL_REQUEST:
        case types.GET_SORTED_PRODUCTS_REQUEST:
        case types.GET_PRODUCTS_BY_CATEGORY_REQUEST:
            return {
                ...state, processing: true
            }
        case types.GET_PRODUCTS_ALL_SUCCESS:
        case types.GET_SORTED_PRODUCTS_SUCCESS: {
            return {
                ...state, allProducts: [...action.payload], processing: false, error: false,
            }
        }
        case types.GET_PRODUCTS_ALL_INFINITY_SCROLL_SUCCESS: {
            return {
                ...state, allProducts: [...state.allProducts, ...action.payload], processing: false, error: false,
            }
        }
        case types.GET_PRODUCTS_BY_CATEGORY_SUCCESS:{
            return {
                ...state, allProducts: [...action.payload], processing: false, error: false,
            }
        }
        case types.API_ERROR: {
            return {
                ...state, error: true, processing: false
            }
        }
        default:
            return state
    }
}