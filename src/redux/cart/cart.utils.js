export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem =>
         cartItem.id===cartItemToAdd.id);
    if(existingCartItem){
        return (cartItems.map(cartItem=>
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            :cartItem
        ));
    } 
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemsFromCart = (cartItems, cartItemToRemove) => {
    return (
        cartItems.filter(cartItem=> cartItem.id !== cartItemToRemove.id)
    )
};

export const withdrawItem = (cartItems, cartItemToWithdraw) => {
    if(cartItemToWithdraw.quantity === 1){
        return removeItemsFromCart(cartItems, cartItemToWithdraw);
    }
    return (
        cartItems.map(cartItem=>
           cartItem.id === cartItemToWithdraw.id ?
           {...cartItem, quantity: cartItem.quantity - 1}
            :cartItem
            )
        )    
};

export const appendItem = (cartItems, cartItemToAppend) => {
    return (
        cartItems.map(cartItem => cartItem.id===cartItemToAppend.id?
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem)
    )
};