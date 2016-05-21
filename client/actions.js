/*
 * Action types
 */

export const CLICK_BUTTON = 'CLICK_BUTTON';
export const EDIT_TEXT = 'EDIT_TEXT';

/*
 * Action creators
 */

export function clickButton() {
  return { type: CLICK_BUTTON };
}

export function editText(text) {
  return {
    type: EDIT_TEXT,
    text,
  };
}
