import * as types from './modalActionsTypes'

export function openModal() {
    return {type: types.OPEN_MODAL}
}

export function closeModal() {
    return {type: types.CLOSE_MODAL}
}