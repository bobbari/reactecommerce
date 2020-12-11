import * as userType from './user.type'

export const setCurrentUser =  (user)=>{
    return {
        type: userType.SET_CURRENT_USER,
            payload: user
    }
}
