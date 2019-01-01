import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ViewallQtnsConnected, { ViewallQtns } from '../getQuestions';

describe('Handles ViewAllQtns container', () => {
  let wrapper;
  let viewQuestions;
  const data = {
    title: 'what is this?',
    description: 'so what is this mahn?',
    tags: 'This',
  };
  const initialState = {
    getQuestionsReducer: { qtns: [] },
  };
  beforeEach(() => {
    viewQuestions = jest.fn();
    const mockStore = configureMockStore([thunk]);
    const store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <ViewallQtnsConnected
          questions={[data]}
          viewQuestions={viewQuestions}
        />
      </Provider>,
    );
  });

  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('renders correctly', () => {
    wrapper = mount(
      <ViewallQtns
        questions={[]}
        viewAllQtns={jest.fn()}
        viewQuestions={viewQuestions}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
