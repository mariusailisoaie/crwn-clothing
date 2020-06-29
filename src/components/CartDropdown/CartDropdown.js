import React from 'react';

import './CartDropdown.scss';

import { connect } from 'react-redux';
import { cartItemsSelector } from '../../selectors/cartSelector';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
          cartItems.map(cartItem => <CartItem key={ cartItem.id } item={ cartItem } />)
          :
          <span className='cart-empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});

export default connect(mapStateToProps)(CartDropdown);