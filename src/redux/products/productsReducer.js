import * as types from './productsActionsTypes'

const initialState = {
    error: false,
    processing: true,
    allProducts: {},
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_PRODUCTS_BY_CATEGORY_SUCCESS:{
            const products = {}
            action.payload.forEach(item => products[item.id] = item)
            console.log(products)
            return {
                ...state, allProducts: {...products}, processing: false
            }
        }
        case types.GET_PRODUCTS_ALL_SUCCESS: {
            const products = {}
            action.payload.forEach(item => products[item.id] = item)
            console.log(products)
            return {
                ...state, allProducts: {...state.allProducts, ...products}, processing: false
            }
        }
        case types.SORTED_PRODUCTS: {
            return {
                ...state, allProducts: {...action.payload}
            }
        }
        default:
            return state
    }
}