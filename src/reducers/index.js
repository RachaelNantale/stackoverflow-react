import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import postQtnReducer from './postquestionReducer';
import getQuestionsReducer from './questionsReducer';

const Combinedreducers = combineReducers({
  userReducer,
  loginReducer,
  postQtnReducer,
  getQuestionsReducer,
});

export default Combinedreducers;
