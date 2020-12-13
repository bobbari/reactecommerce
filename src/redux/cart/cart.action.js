import { CartItemReducer} from './cart.types'

export const CartDropdownToggle = () =>{
    return {
        type: CartItemReducer.TOGGLE_CART_HIDDEN
    }
}
export const addItem = (item) =>{
   return  {
        type: CartItemReducer.ADD_ITEM,
        payload: item
    }
}