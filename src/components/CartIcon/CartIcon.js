import React from 'react';

import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-icon.svg';

import { toggleCart } from '../../actions/cartActions';

import { connect } from 'react-redux';

const CartIcon = ({ toggleCart }) => (
  <div className='cart-icon' onClick={ toggleCart }>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);