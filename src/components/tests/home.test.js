import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home/home';

it('renders the signup component', () => {
  const HomeComponent = shallow(<Home />);
  expect(HomeComponent).toMatchSnapshot();
});
