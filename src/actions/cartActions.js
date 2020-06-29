import { CartActionTypes } from './actionTypes/cartActionTypes';

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART_ITEMS,
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCheckout = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CHECKOUT,
  payload: item,
});