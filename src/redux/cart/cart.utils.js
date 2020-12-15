export const addItemToCart = (cartItems,cartItemsToAdd)=>{
    const existingItem = cartItems.find((item)=>item.id === cartItemsToAdd.id);
    if(existingItem){
        return cartItems.map((cartItem) => 
            (cartItem.id === cartItemsToAdd.id) ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }else{
        return [...cartItems, { ...cartItemsToAdd, quantity:1}];
    }
}   

export const removeItemFromCart = (cartItems, cartItemToRemove) =>{
    
    // const existingItem = cartItems.find((item)=>item.id===cartItemToRemove.id);
    if (cartItemToRemove.quantity>1) {
        return cartItems.map(
            (item) => (item.id === cartItemToRemove.id) ? { ...item, quantity: item.quantity-1}:item
            )
    }else{
        return cartItems.filter(item => item.id !== cartItemToRemove.id)
    }
}