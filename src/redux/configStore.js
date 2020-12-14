import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import {applyMiddleware, compose} from 'redux';
import {createStore} from 'redux';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['product', 'productReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const initialiseSagaMiddleware = createSagaMiddleware();
const composeEnhancers =  process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'MyApp', actionsBlacklist: ['REDUX_STORAGE_SAVE']})
    : compose;

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(initialiseSagaMiddleware))
);
const persistor = persistStore(store);

initialiseSagaMiddleware.run(rootSaga);

export {store, persistor};