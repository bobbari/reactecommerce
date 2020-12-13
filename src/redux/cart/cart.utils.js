export const addItemToCart = (cartItems,cartItemsToAdd)=>{
    const existingItem = cartItems.find((item)=>item.id === cartItemsToAdd.id);
    if(existingItem){
        return cartItems.map((cartItem) => 
            (cartItem.id === cartItemsToAdd.id) ? { ...cartItem, quantity: cartItem.quantity + 1 } : { cartItem }
        )
    }else{
        return [...cartItems, { ...cartItemsToAdd, quantity:1}];
    }
}   