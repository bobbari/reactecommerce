import { CartItemType} from './cart.types'

export const CartDropdownToggle = () =>{
    return {
        type: CartItemType.TOGGLE_CART_HIDDEN
    }
}

export const addItem = (item) =>{
   return  {
        type: CartItemType.ADD_ITEM,
        payload: item
    }
}

export const removeItem = (item) =>{
   return  {
        type: CartItemType.REMOVE_ITEM,
        payload: item
    }
}

export const clearItemFromCart = (item)=>{
    return {
        type:CartItemType.CLEAR_ITEM_FROM_CART,
        payload:item
    }
}