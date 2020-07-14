import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';

import { addNotification, removeNotification } from '../../utils/notifications.utils';

import axios from 'axios';

import { clearCart } from '../../actions/cartActions';

const StripeButton = ({ price, clearCart, history }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_4gu0fGuFiI84EiPVCku1iKQK';

  const onToken = token => {
    const id = addNotification('Please wait.', 'We are processing your payment.', 'info', 'top', 'top-center', 'fadeIn', 'fadeOut', 5000, true);

    axios.post('payments', { token, amount: priceForStripe })
      .then(res => {
        clearCart();
        history.push('/');
        removeNotification(id);
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

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
});

export default withRouter(connect(null, mapDispatchToProps)(StripeButton));
