import * as types from './modalActionsTypes'

const initialState = {
    showModal: false
}

export default function reducer(state=initialState, action) {
    switch (action.type){
        case types.TOGGLE_MODAL: {
            const newShowModal = !state.showModal
            return {
                ...state, showModal: newShowModal
            }
        }
        default:
            return state
    }
}