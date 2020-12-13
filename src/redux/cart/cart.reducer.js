import { CartItemReducer} from './cart.types'
import { addItemToCart} from './cart.utils'

const inital_State ={
    hidden:false,
    cartItem:[],
    isloading:false,
    error:null,
}

 const CartReducer = (state = inital_State,action)=>{
    switch (action.type) {
        case CartItemReducer.TOGGLE_CART_HIDDEN:
            return {...state,
                hidden:!state.hidden,
                isloading:false,
                error:null}
        case CartItemReducer.ADD_ITEM:
            return {...state,
                isloading:false,
                error:null,
                cartItem: addItemToCart(state.cartItem,action.payload)
                // cartItem:[...state.cartItem,action.payload]
            }
        default:
            return state;
    }
}

export default CartReducer