import StripeCheckout from "react-stripe-checkout";

import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IAkF8Bbado7lwRX9I9R7C2WQJ67I5EYDrWZs2tiq8ZWz3VAE4HYZNxRPx1j3c0xv3uZhQsWGOLYVtmaxlVYGKCb001h2x4Eqa';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }   
        })
        .then(response => {
            alert('payment successful')
        })
        .catch(error => {
            console.log('Payment error', error);
            alert('There was an error with your payment, please make sure you use the provided card');
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;