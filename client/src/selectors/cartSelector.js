import { createSelector } from 'reselect';

const cartSelector = state => state.cart;

export const cartHiddenSelector = createSelector(
  [cartSelector],
  cart => cart.hidden,
);

export const cartItemsSelector = createSelector([cartSelector], cart => cart.cartItems);

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  cartItems => cartItems.reduce((accumulatedQuantity, currentItem) => accumulatedQuantity + currentItem.quantity, 0)
);

export const cartTotalSelector = createSelector(
  [cartItemsSelector],
  cartItems => cartItems.reduce((accumulatedQuantity, currentItem) => accumulatedQuantity + currentItem.quantity * currentItem.price, 0)
);
