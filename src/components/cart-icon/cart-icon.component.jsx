import React from "react";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({dispatch, itemCount}) => (
    <div className="cart-icon" onClick={()=>dispatch(toggleCartHidden())}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
});

export default connect(mapStateToProps)(CartIcon);