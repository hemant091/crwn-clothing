import  CartActionTypes  from "./cart.type";

export const toggleCartHidden = () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItems = cartItem =>({
    type: CartActionTypes.ADD_ITEMS,
    payload: cartItem
});

export const removeCartItems = cartItem=>({
    type: CartActionTypes.REMOVE_ITEMS,
    payload: cartItem
});

export const withdrawCartItem = cartItem=>({
    type: CartActionTypes.WITHDRAW_ITEM,
    payload: cartItem
});

export const appendCartItem = cartItem=>({
    type: CartActionTypes.APPEND_ITEM,
    payload: cartItem
});

export const clearCart = ()=> ({
    type: CartActionTypes.CLEAR_CART
});
