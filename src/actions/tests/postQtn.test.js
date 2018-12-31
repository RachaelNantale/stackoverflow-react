import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import ACTION_TYPE from '../actionTypes';
import postQuestion from '../postqtnAction';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const POST_URL = 'http://127.0.0.1:5000/api/v1/questions';

const data = {
  title: 'This is a title',
  description: 'This is a description',
  tags: 'tags, tag',
};
const vagueData = {
  title: '',
  description: 'This is a description',
  tags: 'tags, tag',
};
describe('Post a Question Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('Handles Posting a question', () => {
    fetchMock.post(POST_URL, data);
    const store = mockStore({});
    const expectedAction = [{ type: ACTION_TYPE.POST_A_QUESTION_SUCCESS, payload: data }];
    return store
      .dispatch(postQuestion(data))
      .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
});
