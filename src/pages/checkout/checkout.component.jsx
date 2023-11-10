import React from "react";
import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import './checkout.styles.scss';

const CheckOut = ({cartItems, cartTotal}) =>(
    <div className="check-out">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
            {
                 cartItems.map(cartItem=>(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
            }   
            
        <div className="total">
            <span>Total: &#8377; {cartTotal}</span>
        </div>
        <div className="test-warning">
            *Please use the following test creadit card for payments.*
            <br/>
            4242 4242 4242 4242 - Exp: 01/34 - CVV:123
        </div>
        <StripeCheckoutButton price={cartTotal} currencySymbol="&#8377;"/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})



export default connect(mapStateToProps)(CheckOut);