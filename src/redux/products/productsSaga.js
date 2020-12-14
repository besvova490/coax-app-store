import {takeLatest, put, call} from 'redux-saga/effects';

import * as types from './productsActionsTypes';
import * as actions from './productsActions';
import {getBooks} from '../../libs/products';

export function* getAllBooksSaga(action) {
    try {
        const data = yield call(getBooks, {...action.payload});
        yield put(actions.getAllProductsSuccessAction(data));
    } catch (error) {
        yield put(actions.apiRequestError());
    }

}

export function* getBooksByCategorySaga(action) {
    try {
        const data = yield call(getBooks, {...action.payload});
        yield put(actions.getProductsByCategorySuccessAction(data));
    }catch (error) {
        yield put(actions.apiRequestError());
    }
}

export function* getAllBooksInfinityScrollSaga(action) {
    try {
        const data = yield call(getBooks, {...action.payload});
        yield put(actions.getAllBooksInfinityScroll(data));
    }catch (error){
        yield put(actions.apiRequestError());
    }
}

export function* getSortedProductsSaga(action) {
    try {
        const data = yield call(getBooks, {...action.payload});
        yield put(actions.getSortedProductsSuccessAction(data));
    }catch (error){
        yield put(actions.apiRequestError());
    }
}

export default function* watchBooks() {
    yield takeLatest(types.GET_PRODUCTS_ALL_REQUEST, getAllBooksSaga);
    yield takeLatest(types.GET_PRODUCTS_BY_CATEGORY_REQUEST, getBooksByCategorySaga);
    yield takeLatest(types.GET_PRODUCTS_ALL_INFINITY_SCROLL_REQUEST, getAllBooksInfinityScrollSaga);
    yield takeLatest(types.GET_SORTED_PRODUCTS_REQUEST, getSortedProductsSaga);
}