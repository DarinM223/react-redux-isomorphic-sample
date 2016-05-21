import { combineReducers } from 'redux';
import { CLICK_BUTTON, EDIT_TEXT } from './actions.js';

function button(state = 0, action) {
  switch (action.type) {
    case CLICK_BUTTON:
      return state + 1;
    default:
      return state;
  }
}

function text(state = '', action) {
  switch (action.type) {
    case EDIT_TEXT:
      return action.text;
    default:
      return state;
  }
}

const app = combineReducers({
  button,
  text,
});

export default app;
