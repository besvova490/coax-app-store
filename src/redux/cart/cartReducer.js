import * as types from './cartActionsTypes'
import deepCopy from "../../helpers/deepCopy";

const initialState = {
    cartList: {},
    totalPrice: 0,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_CART_LIST: {
            if (action.payload.id in state.cartList) {
                const newCartObj = deepCopy(state.cartList[action.payload.id])
                const newCartList = deepCopy(state.cartList)
                newCartObj.quantity += 1
                newCartList[action.payload.id] = newCartObj
                return {
                    ...state, cartList: {...newCartList}
                }
            }
            return {
                ...state, cartList: {...state.cartList, [action.payload.id]: {...action.payload, quantity: 1}}
            }
        }
        case types.DEC_IN_CART_LIST: {
            const newCartObj = deepCopy(state.cartList[action.payload.id])
            const newCartList = deepCopy(state.cartList)
            newCartObj.quantity -= 1
            if (newCartObj.quantity <= 0) {
                delete newCartList[action.payload.id]
                return {
                    ...state, cartList: {...newCartList}
                }
            }
            newCartList[action.payload.id] = newCartObj
            return {
                ...state, cartList: {...newCartList}
            }
        }
        case types.DEL_FROM_CART_LIST: {
            const newCartList = JSON.parse(JSON.stringify(state.cartList))
            delete newCartList[action.payload.id]
            return {
                ...state, cartList: {...newCartList}
            }
        }
        case types.UPDATE_CART_LIST: {
            return {...state, totalPrice: action.payload.totalPrice}
        }
        default:
            return state
    }
}