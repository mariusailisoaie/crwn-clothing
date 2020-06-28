import React from 'react';

import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-icon.svg';

import { toggleCart } from '../../actions/cartActions';
import { cartItemsCountSelector } from '../../selectors/cartSelector';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

const CartIcon = ({ toggleCart, itemsCount }) => (
  <div className='cart-icon' onClick={ toggleCart }>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{ itemsCount }</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  itemsCount: cartItemsCountSelector,
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);