import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import userLogin from '../loginAction';
import ACTION_TYPE from '../actionTypes';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const LOGIN_URL = 'https://stackoverflow-lite222.herokuapp.com/api/v1/auth/login';

const data = {
  email: 'marryme@gmail.com',
  password: 'neddassebo',
};
describe(' sigup actions ', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('Handles login ========== a user', () => {
    fetchMock.post(LOGIN_URL, data);
    const store = mockStore({});
    const expectedAction = [{ type: ACTION_TYPE.USER_LOGIN_SUCCESS, payload: data }];
    return store
      .dispatch(userLogin(data))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
});
