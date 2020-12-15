import {combineReducers} from 'redux'
import userReducer from './user.reducer';
import CartReducer from './cart/cart.reducer'
 

// combine reducer for combin all the reducer here
const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer
})


export default rootReducer;