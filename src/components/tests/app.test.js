import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';

it('renders the signup component', () => {
  const AppComponent = shallow(<App />);
  expect(AppComponent).toMatchSnapshot();
});
