import { combineReducers } from 'redux';
import { button, text } from './home.js';

const rootReducer = combineReducers({
  button,
  text,
});

export default rootReducer;
