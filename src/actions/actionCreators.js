import ACTION_TYPE from './actionTypes';

export const signupSuccessful = response => ({
  type: ACTION_TYPE.USER_REGISTRATION,
  payload: response,
});

export const signupFail = response => ({
  type: ACTION_TYPE.USER_REGISTER_FAIL,
  payload: response,
});

export const getUserInput = payload => ({
  type: ACTION_TYPE.GET_USER_INPUT,
  payload,
});
