import * as CartType from './cart.types'

const inital_State ={
    hidden:false,
    isloading:false,
    error:null,
}

 const CartReducer = (state = inital_State,action)=>{
    switch (action.type) {
        case CartType.TOGGLE_CART_HIDDEN:
            return {...state,
                hidden:!state.hidden,
                isloading:false,
                error:null}
        
        default:
            return state;
    }
}

export default CartReducer