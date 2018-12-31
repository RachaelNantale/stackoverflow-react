import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loginReducer from './loginReducer';
import postQtnReducer from './postquestionReducer';

const Combinedreducers = combineReducers({
  userReducer,
  loginReducer,
  postQtnReducer,
});

export default Combinedreducers;
