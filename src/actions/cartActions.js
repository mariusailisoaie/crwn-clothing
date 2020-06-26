import { CartActionTypes } from './actionTypes/cartActionTypes';

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART_ITEMS,
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});