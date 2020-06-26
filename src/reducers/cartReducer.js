import { CartActionTypes } from '../actions/actionTypes/cartActionTypes';

const INITIAL_STATE = {
  hidden: true,
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_ITEMS:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
}

export default cartReducer;