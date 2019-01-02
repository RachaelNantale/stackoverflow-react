import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../Signup/signup';


it('renders the signup component', () => {
  const signUpComponent = shallow(<Signup onSubmit={() => true} onChange={() => true} title="title" />);
  expect(signUpComponent).toMatchSnapshot();
});
