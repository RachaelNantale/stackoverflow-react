import React from 'react';
import { shallow } from 'enzyme';
import QuestionPageConnected, { mapDispatchToProps, QuestionPage } from '../postQuestion';

import ACTION_TYPE from '../../actions/actionTypes';

describe('<QuestionPage />', () => {
  let QuestionPageComponent;
  let wrapper;
  beforeEach(() => {
    QuestionPageComponent = shallow(<QuestionPageConnected />);
  });

  it('should render the component', () => {
    expect(QuestionPageComponent).toMatchSnapshot();
  });

  it('should dispatch a method to get input', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getQuestionInputs({});
    expect(dispatch.mock.calls[0][0]).toEqual({
      payload: {},
      type: ACTION_TYPE.GET_QUESTION_INPUT,
    });
    mapDispatchToProps(dispatch).postQuestion({});
  });

  it('should call handle input user method', () => {
    const getQuestionInputs = jest.fn();
    wrapper = shallow(
      <QuestionPage
        postQuestion={jest.fn()}
        freshQtn={{}}
        getQuestionInputs={getQuestionInputs}
      />,
    );
    wrapper.instance().handleUpdateFields({ target: { name: 'title', value: 'this is a title' } });
    expect(getQuestionInputs).toHaveBeenCalled();
  });
});

describe('handle Post a Question', () => {
  const wrapper = shallow(<QuestionPage />);
  wrapper.setProps({ signUpuser: jest.fn() });
  const fakeEventReturn = { target: { id: 1, value: 'some val' } };
  const fakeEvent = { preventDefault: () => fakeEventReturn };
  const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
  wrapper.instance().handleSubmit(fakeEvent);
  expect(spy).toHaveBeenCalled();
});
