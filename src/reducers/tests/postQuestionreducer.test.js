import postQtnReducer from '../postquestionReducer';
import ACTION_TYPE from '../../actions/actionTypes';

const initialState = {
  postQtnReducer: {
    Question: {
      title: '', description: '', tags: '',
    },
  },
};

describe('it should have inital state', () => {
  it('should return the initial state for post question reducer', () => {
    expect(postQtnReducer(initialState.postQtnReducer, {})).toEqual(initialState.postQtnReducer);
  });
  it('Test posting a question was successful', () => {
    const initialState = {};
    const payload = {
      title: 'this is a title',
      description: 'this is a description',
      tags: 'tag, tags',
    };
    const action = {
      type: ACTION_TYPE.POST_A_QUESTION_SUCCESS,
      payload,
    };
    const expectedData = {
      ...initialState,
      data: action.payload,
    };
    expect(postQtnReducer(initialState, action)).toEqual(expectedData);
  });
  it('Test posting a question failed', () => {
    const initialState = {};
    const payload = {
      title: 'm',
    };
    const action = {
      type: ACTION_TYPE.POST_A_QUESTION_FAILURE,
      payload,
    };
    const expectedData = {
      ...initialState,
      data: action.payload,
    };
    expect(postQtnReducer(initialState, action)).toEqual(expectedData);
  });
  it('Test registration failed', () => {
    const initialState = {};
    const payload = {
      title: 'this is a title',
      description: 'this is a description',
      tags: 'tag, tags',
    };
    const action = {
      type: ACTION_TYPE.GET_QUESTION_INPUT,
      payload,
    };
    const expectedData = {
      ...initialState,
      Question: action.payload,
    };
    expect(postQtnReducer(initialState, action)).toEqual(expectedData);
  });
});
