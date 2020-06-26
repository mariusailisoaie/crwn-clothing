import { CartActionTypes } from './actionTypes/cartActionTypes';

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART_ITEMS,
});