import * as userType from './user.type'

const initial_state ={
    currentUser:""
}

const userReducer = (state= initial_state,action) =>{
    switch (action.type) {
        case userType.SET_CURRENT_USER:
            return {...state, currentUser:action.payload}
        default:
            return state;
    }
}
export default userReducer;