import React from "react";
import './custom-button.styles.scss';

const CustomButton = ({children, isInverted, isSignInWithGoogle, ...otherProps}) => (
        <button className={`${isSignInWithGoogle ? 'google-sign-in': ''} 
        ${isInverted ? 'inverted': ''} 
        custom-button`} {...otherProps}>
            {children}
        </button>
);
export default CustomButton;