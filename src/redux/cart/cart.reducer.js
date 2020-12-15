import { CartItemType} from './cart.types'
import { addItemToCart,removeItemFromCart} from './cart.utils'

const inital_State ={
    hidden:false,
    cartItem:[],
    isloading:false,
    error:null,
}

 const CartReducer = (state = inital_State,action)=>{
    switch (action.type) {
        case CartItemType.TOGGLE_CART_HIDDEN:
            return {...state,
                hidden:!state.hidden,
                isloading:false,
                error:null}
        case CartItemType.ADD_ITEM:
            return {...state,
                isloading:false,
                error:null,
                cartItem: addItemToCart(state.cartItem,action.payload)
                // cartItem:[...state.cartItem,action.payload]
            }
        case CartItemType.CLEAR_ITEM_FROM_CART:
            return {...state,
                    cartItem:state.cartItem.filter(item=>item.id !== action.payload.id)       
                    }  
        case CartItemType.REMOVE_ITEM:
            return {
                ...state,
                cartItem: removeItemFromCart(state.cartItem, action.payload)
            }              
        default:
            return state;
    }
}

export default CartReducer