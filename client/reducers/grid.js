import { EDIT_CELL } from '../actions/grid.js';
import generateGrid from '../utils/generateGrid.js';

/* eslint-disable no-console */

const initGrid = generateGrid();
console.log('Initial grid: ', initGrid);

export function grid(state = initGrid, action) {
  switch (action.type) {
    case EDIT_CELL:
      console.log(`(${action.row}, ${action.col}) changed to ${action.number}`);
      return state;
    default:
      return state;
  }
}
