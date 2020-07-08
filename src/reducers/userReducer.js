import UserActionTypes from '../actions/actionTypes/userActionTypes';

const INITIAL_STATE = {
  currentUser: null,
  error: '',
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: '',
      }
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default userReducer;
