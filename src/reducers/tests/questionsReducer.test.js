import getQuestionsReducer from '../questionsReducer';
import ACTION_TYPE from '../../actions/actionTypes';

const initialState = {
  qtns: [],
};

describe('it should have inital state', () => {
  it('should return the initial state for get questions reducer', () => {
    expect(getQuestionsReducer(initialState,
      {})).toEqual(initialState);
  });
  it('Test getting a question was successful', () => {
    const payload = [];
    const action = {
      type: ACTION_TYPE.GET_ALL_QUESTIONS,
      payload,
    };
    const expectedData = {
      ...initialState,
      qtns: action.payload,
    };
    expect(getQuestionsReducer(initialState, action)).toEqual(expectedData);
  });
});
