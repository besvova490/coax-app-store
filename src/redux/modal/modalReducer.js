import * as types from './modalActionsTypes';

const initialState = {
    showModal: false
}

export default function reducer(state=initialState, action) {
    switch (action.type){
        case types.OPEN_MODAL: {
            return {
                ...state, showModal: true
            }
        }
        case types.CLOSE_MODAL: {
            return initialState
            }
        default:
            return state
    }
}