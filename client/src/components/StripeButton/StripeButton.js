import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_4gu0fGuFiI84EiPVCku1iKQK';

  const onToken = token => {
    console.log('log: StripeButton -> token', token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing ApS'
      billingAddress
      shippingAddress
      description={ `Your total is $${ price }` }
      amount={ priceForStripe }
      panelLabel='Pay now'
      token={ onToken }
      stripeKey={ publishableKey }
    />
  )
}

export default StripeButton;
