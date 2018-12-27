import React from 'react';
import { shallow } from 'enzyme';
import AuthPageConnected, { mapDispatchToProps, AuthPage } from '../auth';

import ACTION_TYPE from '../../actions/actionTypes';

describe('<AuthPage />', () => {
  let AuthPageComponent;
  let wrapper;
  beforeEach(() => {
    AuthPageComponent = shallow(<AuthPageConnected />);
  });

  it('should render the component', () => {
    expect(AuthPageComponent).toMatchSnapshot();
  });

  it('should dispatch a method to  get   signup user input', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getUserInputs({});
    expect(dispatch.mock.calls[0][0]).toEqual({ payload: {}, type: ACTION_TYPE.GET_USER_INPUT });
    mapDispatchToProps(dispatch).signUpuser({});
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
      <AuthPage
        signUpuser={jest.fn()}
        loginUser={jest.fn()}
        freshUser={{}}
        getUserInputs={getUserInputs}
      />,
    );
    wrapper.instance().handleUpdateFields({ target: { name: 'username', value: 'rachael' } });
    expect(getUserInputs).toHaveBeenCalled();
  });
});

describe('handle signup', () => {
  const wrapper = shallow(<AuthPage />);
  wrapper.setProps({ signUpuser: jest.fn() });
  const fakeEventReturn = { target: { id: 1, value: 'some val' } };
  const fakeEvent = { preventDefault: () => fakeEventReturn };
  const spy = jest.spyOn(wrapper.instance(), 'handleSignUp');
  wrapper.instance().handleSignUp(fakeEvent);
  expect(spy).toHaveBeenCalled();
});

describe('handle login', () => {
  const wrapper = shallow(<AuthPage />);
  wrapper.setProps({ loginUser: jest.fn() });
  const fakeEventReturn = { target: { id: 1, value: 'some val' } };
  const fakeEvent = { preventDefault: () => fakeEventReturn };
  const spy = jest.spyOn(wrapper.instance(), 'handleLogin');
  wrapper.instance().handleLogin(fakeEvent);
  expect(spy).toHaveBeenCalled();
});
