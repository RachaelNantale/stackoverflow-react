import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import userSignup from '../signupactions';
import ACTION_TYPE from '../actionTypes';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const REGISTER_URL = 'https://stackoverflow-lite222.herokuapp.com/api/v1/auth/signup';

const data = {
  email: 'marryme@gmail.com',
  password: 'neddassebo',
};
describe(' sigup actions ', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('Handles registers a user', () => {
    fetchMock.post(REGISTER_URL, data);
    const store = mockStore({});
    const expectedAction = [{ type: ACTION_TYPE.USER_REGISTRATION, payload: data }];
    return store
      .dispatch(userSignup(data))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
});
