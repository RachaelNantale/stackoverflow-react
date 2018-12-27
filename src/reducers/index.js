import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loginReducer from './loginReducer';

const Combinedreducers = combineReducers({
  userReducer,
  loginReducer,
});

export default Combinedreducers;
