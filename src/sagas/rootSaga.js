import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shopSagas';

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
  ]);
}
