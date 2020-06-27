import React from 'react';

import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-icon.svg';

import { toggleCart } from '../../actions/cartActions';
import { cartItemsCountSelector } from '../../selectors/cartSelector';

import { connect } from 'react-redux';

const CartIcon = ({ toggleCart, itemsCount }) => (
  <div className='cart-icon' onClick={ toggleCart }>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{ itemsCount }</span>
  </div>
)

const mapStateToProps = state => ({
  itemsCount: cartItemsCountSelector(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);