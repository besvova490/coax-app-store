import {all} from "redux-saga/effects";

import watchBooks from "./products/productsSaga";
import watchByIdBook from "./item-product/item-productSaga";

export default function* rootSaga() {
    yield all([
        watchBooks(),
        watchByIdBook()
    ]);
}