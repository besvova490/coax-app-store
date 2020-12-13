import * as types from './wantedsActionsTypes'

export function toggleToWantedList(payload) {
    return {type: types.TOGGLE_WANTED_LIST, payload}
}
