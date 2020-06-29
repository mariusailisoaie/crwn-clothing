import React from 'react';

import './CheckoutItem.scss';

import { connect } from 'react-redux';
import { clearItemFromCheckout } from '../../actions/cartActions';

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={ imageUrl } alt='item' />
      </div>
      <span className='name'>{ name }</span>
      <span className='quantity'>{ quantity }</span>
      <span className='price'>{ price }</span>
      <div className='remove-button' onClick={ () => clearItem(cartItem) }>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCheckout(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);