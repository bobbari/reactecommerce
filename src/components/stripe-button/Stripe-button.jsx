import React from 'react'
import StripeCheckOut from 'react-stripe-checkout';

import './stripe-buttons.styles.scss';

const StripeButton = ({price}) => {
    const priceToStripe = price*100;
    const publishableKey = `pk_test_51HzfN2CyQqIUbyvRutHQHVU5nXOfPGJVvx22L595In2W2hEa75TQvpcUit4SJCasJMelgX8B1b9ZuSM93EES3BP300LbIDgA9m`;
    const token = ''
    const onToken = token => {
        console.log(token);
        alert('payment was successfull')
    }
    return (
        <StripeCheckOut 
            token={token}
            stripeKey={publishableKey}
            amount={priceToStripe}
            billingAddress
            shippingAddress
            name="Shop Online"
            label="pay Now"
            image="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Artstation_logo_logos-512.png"
            description={`your total price value $${priceToStripe}`}
        />
    )
}

export default StripeButton
