import {createSelector} from 'reselect';


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
)

export const selectCartItemsQuantity = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((ac,item)=>(ac+item.quantity),0)
)