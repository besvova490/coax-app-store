import React from 'react'
import {Provider} from "react-redux";
import {store, persistor} from "../../redux/configStore";
import { PersistGate } from 'redux-persist/integration/react'

import './app.css'
import ErrorBoundary from "../errorBoundary/errorBoundary";
import RouterPages from "../router/router";
import Modal from "../modal/modal";

const App = () => {
    return(
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ErrorBoundary>
                        <div className='container-fluid'>
                            <RouterPages />
                            <Modal />
                        </div>
                    </ErrorBoundary>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    )
}

export default App