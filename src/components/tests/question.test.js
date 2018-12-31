import React from 'react';
import { shallow } from 'enzyme';
import Question from '../Question/question';

it('renders the signup component', () => {
  const QuestionComponent = shallow(<Question />);
  expect(QuestionComponent).toMatchSnapshot();
});
