import * as types from "./authActionsTypes";

export function userLogInAction() {
    localStorage.setItem('token', 'true');
    return {type: types.USER_LOG_IN};
}

export function userLogOutAction() {
    localStorage.removeItem('token');
    return {type: types.USER_LOG_OUT};
}

