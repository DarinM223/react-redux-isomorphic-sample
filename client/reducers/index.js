import { combineReducers } from 'redux';
import { board } from './board.js';

const rootReducer = combineReducers({
  board,
});

export default rootReducer;
