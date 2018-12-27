import ACTION_TYPE from '../actions/actionTypes';

const initialState = {
  freshUser: {
    email: '',
    password: '',
  },
};

const userReducer = (state = initialState, action) => {
  const getInputData = {
    ...state,
    freshUser: action.payload,
  };
  const regData = {
    ...state,
    data: action.payload,
  };
  switch (action.type) {
    case ACTION_TYPE.GET_USER_INPUT:
      return getInputData;
    case ACTION_TYPE.USER_LOGIN:
      return regData;
    case ACTION_TYPE.USER_LOGIN_FAIL:
      return regData;
    default: return state;
  }
};
export default userReducer;
