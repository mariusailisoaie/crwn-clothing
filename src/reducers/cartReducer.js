import { CartActionTypes } from '../actions/actionTypes/cartActionTypes';
import { addItemToCart } from '../utils/cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_ITEMS:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    default:
      return state;
  }
}

export default cartReducer;