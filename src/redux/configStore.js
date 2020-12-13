import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {applyMiddleware, compose} from 'redux'
import {createStore} from 'redux'
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer"

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['product', 'productReducer']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const initialiseSagaMiddleware = createSagaMiddleware()
const store = createStore(
    persistedReducer,
    compose(applyMiddleware(initialiseSagaMiddleware),
        process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
const persistor = persistStore(store)

initialiseSagaMiddleware.run(rootSaga)

export {store, persistor}