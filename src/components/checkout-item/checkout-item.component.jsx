import React from "react";
import { connect } from "react-redux";

import './checkout-item.styles.scss';
import { appendCartItem, removeCartItems, withdrawCartItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, dispatch}) => {
    const {imageUrl, name, price, quantity} = cartItem;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="price">&#8377; {price}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>dispatch(withdrawCartItem(cartItem))}> &#10094; </div> 
            <span className="value">{quantity}</span> 
            <div className="arrow" onClick={()=>dispatch(appendCartItem(cartItem))}> &#10095; </div>
        </span>
        <div className="remove-button" onClick={()=> dispatch(removeCartItems(cartItem))}>
        &#10005;
        </div>
    </div>
)};



export default connect()(CheckoutItem);