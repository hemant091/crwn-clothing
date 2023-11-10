import React from "react";
import StripeCheckout from "react-stripe-checkout"; 

const StripeCheckoutButton = ({price, currencySymbol}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51O56KjSB3lSNSbVUlxkTy6RtFCMBUmtXgdUaiRqSrb2aLJDyY0C4N0HfHGwTO9QI7yAJz6hKHVhkSGb2OUmz1IAJ00pLAsI2mG';
    const onToken = token => {
        console.log(token);
        alert('Payemnt Successful');
    }

    const rupee = () => (
        <span>&#8377;</span>
    );
    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing Ltd."
            billingAddress
            shippingAddress
            description={`Your total is ${currencySymbol} ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={ onToken }
            stripeKey={publishableKey}
            currency="INR"
            // to be set dynamically later
            // email="hvaidya5685@gmail.com"
        />
)};

export default StripeCheckoutButton;