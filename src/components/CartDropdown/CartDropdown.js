import React from 'react';

import './CartDropdown.scss';

import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown;