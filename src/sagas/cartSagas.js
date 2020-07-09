import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from '../actions/actionTypes/userActionTypes';
import { clearCart } from '../actions/cartActions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onClearCart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onClearCart)]);
}
