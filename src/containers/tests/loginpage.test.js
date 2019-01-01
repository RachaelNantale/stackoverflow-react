import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import LoginPageConnected, { mapDispatchToProps, LoginPage } from '../login';
import ACTION_TYPE from '../../actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<LoginPage />', () => {
  let AuthPageComponent;
  let wrapper;
  beforeEach(() => {
    const initialState = { loginReducer: { freshUser: { email: '', password: '' } } };
    const store = mockStore(initialState);
    AuthPageComponent = mount(<Provider store={store}><LoginPageConnected /></Provider>);
  });

  it('should render the component', () => {
    expect(AuthPageComponent).toMatchSnapshot();
  });

  it('should dispatch a method to get  login user input', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getUserInputs({});
    expect(dispatch.mock.calls[0][0]).toEqual({ payload: {}, type: ACTION_TYPE.GET_USER_INPUT });
    mapDispatchToProps(dispatch).loginUser({});
  });

  it('should call handle input user method', () => {
    const getUserInputs = jest.fn();
    wrapper = shallow(
      <LoginPage
        loginUser={jest.fn()}
        freshUser={{}}
        getUserInputs={getUserInputs}
      />,
    );
    wrapper.instance().handleUpdateFields({ target: { name: 'username', value: 'rachael' } });
    expect(getUserInputs).toHaveBeenCalled();
  });
});


describe('handle login', () => {
  const wrapper = shallow(<LoginPage />);
  wrapper.setProps({ loginUser: jest.fn() });
  const fakeEventReturn = { target: { id: 1, value: 'some val' } };
  const fakeEvent = { preventDefault: () => fakeEventReturn };
  const spy = jest.spyOn(wrapper.instance(), 'handleLogin');
  wrapper.instance().handleLogin(fakeEvent);
  expect(spy).toHaveBeenCalled();
});
