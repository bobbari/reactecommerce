import {combineReducers} from 'redux'
import userReducer from './user.reducer';

// imp thunk 

// combine reducer for combin all the reducer here
const rootReducer = combineReducers({
    user: userReducer
})


export default rootReducer;