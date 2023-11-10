import  CartActionTypes from "./cart.type";
import { addItemToCart, appendItem, removeItemsFromCart, withdrawItem } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEMS:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEMS:
            return {
                ...state,
                cartItems: removeItemsFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.WITHDRAW_ITEM:
            return {
                ...state,
                cartItems: withdrawItem(state.cartItems, action.payload)
            }
        case CartActionTypes.APPEND_ITEM:
            return {
                ...state,
                cartItems: appendItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }
};

export default cartReducer;