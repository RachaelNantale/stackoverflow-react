import loginReducer from '../loginReducer';
import ACTION_TYPE from '../../actions/actionTypes';

const initialState = {
  loginReducer: { freshUser: { email: '', password: '' } },
  userReducer: { freshUser: { email: '', password: '' } },
};
describe('it should have inital state', () => {
  it('should return the initial state for user reducer', () => {
    expect(loginReducer(initialState.loginReducer, {})).toEqual(initialState.loginReducer);
  });
  it('Test login was successful', () => {
    const payload = {
      email: 'marryme@gmail.com',
      password: 'neddasebo',
      token: 'somerandomtoken',
    };
    const action = {
      type: ACTION_TYPE.USER_LOGIN,
      payload,
    };
    const expectedData = {
      ...initialState,
      data: action.payload,
    };
    expect(loginReducer(initialState, action)).toEqual(expectedData);
  });
  it('Test login failed', () => {
    const payload = {
      email: 'marrymegmail.com',
    };
    const action = {
      type: ACTION_TYPE.USER_LOGIN_FAIL,
      payload,
    };
    const expectedData = {
      ...initialState,
      data: action.payload,
    };
    expect(loginReducer(initialState, action)).toEqual(expectedData);
  });
  it('Test registration failed', () => {
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
    expect(loginReducer(initialState, action)).toEqual(expectedData);
  });
});
