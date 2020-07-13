import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import addNotification from '../../utils/notifications.utils';

import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_4gu0fGuFiI84EiPVCku1iKQK';

  const onToken = token => {
    axios.post('payments', { token, amount: priceForStripe })
      .then(res => {
        addNotification('Success!', 'Your payment was successful!', 'success', 'top', 'top-center', 'fadeIn', 'fadeOut', 5000, true);
      }).catch(err => {
        addNotification(
          'Payment error!',
          'There was an issue with your payment! Please make sure you use the provided credit card.',
          'danger',
          'top',
          'top-center',
          'headShake',
          'fadeOut',
          5500,
          true,
        );
        console.log(err)
      });
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing ApS'
      billingAddress
      shippingAddress
      description={ `Your total is ${ price } dkk` }
      currency='dkk'
      amount={ priceForStripe }
      panelLabel='Pay now'
      token={ onToken }
      stripeKey={ publishableKey }
    />
  )
}

export default StripeButton;
