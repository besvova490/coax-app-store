import {takeLatest, put, call} from 'redux-saga/effects';
import * as types from './productsActionsTypes';
import {getAllProductsSuccessAction, getProductsByCategorySuccessAction} from './productsActions'
import {getBooks} from '../../libs/products'

export function* getAllBooksSaga(actions) {
    const data = yield call(getBooks, {...actions.payload})
    yield put(getAllProductsSuccessAction(data))
}
export function* getBooksByCategorySaga(actions) {
    const data = yield call(getBooks, {...actions.payload})
    yield put(getProductsByCategorySuccessAction(data))
}

export default function* watchBooks() {
    yield takeLatest(types.GET_PRODUCTS_ALL_REQUEST, getAllBooksSaga);
    yield takeLatest(types.GET_PRODUCTS_BY_CATEGORY_REQUEST, getBooksByCategorySaga);
}