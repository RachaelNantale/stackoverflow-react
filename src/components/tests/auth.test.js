import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../Signup/signup';
import Login from '../Login/login';

it('renders the signup component', () => {
  const signUpComponent = shallow(<Signup onSubmit={() => true} onChange={() => true} />);
  expect(signUpComponent).toMatchSnapshot();
});
it('renders the login component', () => {
  const LoginComponent = shallow(<Login onSubmit={() => true} onChange={() => true} />);
  expect(LoginComponent).toMatchSnapshot();
});
