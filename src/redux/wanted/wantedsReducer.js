import * as types from './wantedsActionsTypes';

const initialState = {
    error: false,
    wantedList: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.TOGGLE_WANTED_LIST: {
            const itemIndex = state.wantedList.findIndex(item => item.id === action.payload.id)
            if (itemIndex === -1) {
                return {
                    ...state, wantedList: [...state.wantedList, action.payload]
                }
            }
            return {
                ...state, wantedList: [...state.wantedList.slice(0, itemIndex), ...state.wantedList.slice(itemIndex+1)]
            }
        }
        default:
            return state
    }
}