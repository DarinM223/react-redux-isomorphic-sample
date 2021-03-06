import Immutable from 'immutable';
import { EDIT_CELL, RESTART_GRID } from '../actions/board.js';
import generateGrid from '../utils/generateGrid.js';
import checkErrors from '../utils/checkErrors.js';

const initState = Immutable.fromJS({
  grid: generateGrid(),
  won: false,
});

export function board(state = initState, action) {
  switch (action.type) {
    case EDIT_CELL: {
      const updatedBoard = state.setIn(['grid', action.row, action.col, 'number'], action.number);
      return checkErrors(updatedBoard);
    }
    case RESTART_GRID:
      return Immutable.fromJS({
        grid: generateGrid(),
        won: false,
      });
    default:
      return state;
  }
}
