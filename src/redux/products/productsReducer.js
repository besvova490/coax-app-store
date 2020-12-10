import * as types from './productsActionsTypes'

const initialState = {
    error: false,
    processing: true,
    allProducts: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_PRODUCTS_ALL_SUCCESS: {
            return {
                ...state, allProducts: [...state.allProducts, ...action.payload], processing: false
            }
        }
        default:
            return state
    }
}