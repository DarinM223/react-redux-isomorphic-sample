import Immutable from 'immutable';

export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }

    const state = JSON.parse(serializedState);
    const board = Immutable.fromJS(state.board);
    return { ...state, board };
  } catch (e) {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const board = state.board.toJS();
    const savedState = { ...state, board };
    const serializedState = JSON.stringify(savedState);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore exception
  }
}
