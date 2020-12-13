import {takeLatest, put, call} from 'redux-saga/effects';
import * as types from './item-productActionsTypes';
import * as actions from './item-productActions'
import {getBookById} from '../../libs/products'

export function* getBookByIdSaga(action) {
    const data = yield call(getBookById, {...action.payload})
    yield put(actions.getAllProductByIdSuccessAction(data))
}

export default function* watchByIdBook() {
    yield takeLatest(types.GET_PRODUCTS_BY_ID_REQUEST, getBookByIdSaga);
}