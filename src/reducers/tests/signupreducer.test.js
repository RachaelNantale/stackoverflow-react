import combinedReducers from '..';
import userReducer from '../userReducer';

import ACTION_TYPE from '../../actions/actionTypes';

const initialState = {
  loginReducer: { freshUser: { email: '', password: '' } },
  userReducer: { freshUser: { email: '', password: '' } },
};
describe('it should have inital state', () => {
  it('should return the initial state', () => {
    expect(combinedReducers({}, {})).toEqual(initialState);
  });
  it('should return the initial state for user reducer', () => {
    expect(userReducer(initialState.userReducer, {})).toEqual(initialState.userReducer);
  });
  it('Test registration was successful', () => {
    const initialState = {};
    const payload = {
      email: 'marryme@gmail.com',
    };
    const action = {
      type: ACTION_TYPE.USER_REGISTRATION,
      payload,
    };
    const expectedData = {
      ...initialState,
      data: action.payload,
    };
    expect(userReducer(initialState, action)).toEqual(expectedData);
  });
  it('Test registration failed', () => {
    const initialState = {};
    const payload = {
      email: 'marrymegmail.com',
    };
    const action = {
      type: ACTION_TYPE.USER_REGISTER_FAIL,
      payload,
    };
    const expectedData = {
      ...initialState,
      data: action.payload,
    };
    expect(userReducer(initialState, action)).toEqual(expectedData);
  });
  it('Test registration failed', () => {
    const initialState = {};
    const payload = {
      email: 'marrymegmail.com',
      password: 'neddassebo',
    };
    const action = {
      type: ACTION_TYPE.GET_USER_INPUT,
      payload,
    };
    const expectedData = {
      ...initialState,
      freshUser: action.payload,
    };
    expect(userReducer(initialState, action)).toEqual(expectedData);
  });
});
