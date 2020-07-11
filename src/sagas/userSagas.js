import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from '../actions/actionTypes/userActionTypes';

import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } from '../actions/userActions';

import { auth, googleProvider, getCurrentUser, createUserProfileDocument } from '../firebase/firebase.utils';

import addNotification from '../utils/notifications.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
    yield addNotification(`${ error.code.split('/')[1].replace(/-/g, ' ') }!`, error.message, 'danger', 'top', 'top-center', 'headShake', 'fadeOut', 4500, true);
  }
}

export function* signUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
    yield addNotification('Success!', 'Your account has been created successfully!', 'success', 'top', 'top-center', 'fadeIn', 'fadeOut', 4500, true);
  } catch (error) {
    yield put(signUpFailure(error));
    yield addNotification(`${ error.code.split('/')[1].replace('-', ' ') }!`, error.message, 'danger', 'top', 'top-center', 'headShake', 'fadeOut', 4000, true);
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signInWIthGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
    yield addNotification(`${ error.code.split('/')[1].replace(/-/g, ' ') }!`, error.message, 'danger', 'top', 'top-center', 'headShake', 'fadeOut', 4500, true);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWIthGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
    yield addNotification(`${ error.code.split('/')[1].replace(/-/g, ' ') }!`, error.message, 'danger', 'top', 'top-center', 'headShake', 'fadeOut', 4500, true);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
    yield addNotification(`${ error.code.split('/')[1].replace(/-/g, ' ') }!`, error.message, 'danger', 'top', 'top-center', 'headShake', 'fadeOut', 4500, true);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
    yield addNotification(`${ error.code.split('/')[1].replace(/-/g, ' ') }!`, error.message, 'danger', 'top', 'top-center', 'headShake', 'fadeOut', 4500, true);
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
