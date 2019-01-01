import React from 'react';
import { shallow } from 'enzyme';
import Questions from '../Questions/questions';

it('renders the Questions component', () => {
  const QuestionComponent = shallow(<Questions />);
  expect(QuestionComponent).toMatchSnapshot();
});
