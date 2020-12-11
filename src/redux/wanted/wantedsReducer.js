import * as types from './wantedsActionsTypes'

const initialState = {
    error: false,
    wantedList: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_WANTED_LIST: {
            return {
                ...state, wantedList: {...state.wantedList, [action.payload.id]: action.payload}
            }
        }
        case types.DEL_FROM_WANTED_LIST: {
            const newWontedList = JSON.parse(JSON.stringify(state.wantedList))
            delete newWontedList[action.payload.id]
            return {
                ...state, wantedList: {...newWontedList}
            }
        }
        default:
            return state
    }
}