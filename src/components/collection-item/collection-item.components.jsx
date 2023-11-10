import React from "react";
import { addCartItems } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";

import './collection-item.styles.scss';

const CollectionItem  = ({item, dispatch}) =>{
    const {name, imageUrl, price} = item;
    return (
    <div className="collection-item">
        <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="collection-footer">
            <span>{name}</span>
            <span>&#8377;{price}</span>
        </div>
        <CustomButton isInverted onClick={()=>{dispatch(addCartItems(item))}}>Add To Cart</CustomButton>
    </div>
)};

export default connect()(CollectionItem);