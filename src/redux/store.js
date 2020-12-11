// import {createDispatchHook,createSelectorHook,createStoreHook} from 'react-redux';
import { createStore,applyMiddleware } from "redux";
import rootReducer from './root-reducer';
import logger from "redux-logger";
//array of middleware
const middleWares = [logger]
//create store
const store = createStore(rootReducer, applyMiddleware(...middleWares));
//export create store
export default store;