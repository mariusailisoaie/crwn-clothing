import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shopSagas';
import { userSagas } from './userSagas';
import { cartSagas } from './cartSagas';

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSagas),
    call(cartSagas),
  ]);
}
