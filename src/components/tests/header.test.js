import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

it('renders the signup component', () => {
  const HomeComponent = shallow(<Header />);
  expect(HomeComponent).toMatchSnapshot();
});
