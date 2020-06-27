import React from 'react';

import './CartDropdown.scss';

import { connect } from 'react-redux';
import { cartItemsSelector } from '../../selectors/cartSelector';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => <CartItem key={ cartItem.id } item={ cartItem } />)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: cartItemsSelector(state),
});

export default connect(mapStateToProps)(CartDropdown);