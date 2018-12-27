import actionTypes from '../actions/actionTypes';

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
    case actionTypes.GET_USER_INPUT:
      return getInputData;
    case actionTypes.USER_REGISTRATION:
      return regData;
    case actionTypes.USER_REGISTER_FAIL:
      return regData;
    default: return state;
  }
};
export default userReducer;
