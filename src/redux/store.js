// import {createDispatchHook,createSelectorHook,createStoreHook} from 'react-redux';

import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from './root-reducer';

import {persistStore} from 'redux-persist'

// logger is for  debugging the state(redux) and its change 
import logger from "redux-logger";
//array of middleware
const middleWares = [thunk]

if (process.env.NODE_ENV === "development"){
    middleWares.push(logger)
}

//create store
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

// once the store is created then making persisting with react-presist
export const persistor = persistStore(store);

//export create store and presisitor state 
// eslint-disable-next-line
export default { store, persistor};