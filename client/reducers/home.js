import { CLICK_BUTTON, EDIT_TEXT } from '../actions/home.js';

export function button(state = 0, action) {
  switch (action.type) {
    case CLICK_BUTTON:
      return state + 1;
    default:
      return state;
  }
}

export function text(state = '', action) {
  switch (action.type) {
    case EDIT_TEXT:
      return action.text;
    default:
      return state;
  }
}
