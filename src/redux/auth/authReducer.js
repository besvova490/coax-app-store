import * as types from './authActionsTypes'

const initialState = {
    isAuth: false
}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case types.USER_LOG_IN: {
            return {...state, isAuth: true}
        }
        case types.USER_LOG_OUT: {
            return {...state, isAuth: false}
        }
        default:
            return state
    }
}