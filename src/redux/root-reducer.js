import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

/// reducers
import userReducer from './user.reducer';
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer';

// config persist
const persistConfig = {
    key:"app",
    storage,
    whitelist:[
       'cart' 
    ]
}

// combine reducer for combin all the reducer here
const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

// exporting persisting reducer 

export default persistReducer(persistConfig,rootReducer);