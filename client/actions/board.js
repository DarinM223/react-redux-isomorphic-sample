/**
 * Action types
 */

export const EDIT_CELL = 'EDIT_CELL';
export const RESTART_GRID = 'RESTART_GRID';

/**
 * Action creators
 */

export function editCell(i, j, numCh) {
  return {
    type: EDIT_CELL,
    row: i,
    col: j,
    number: numCh,
  };
}

export function restartGrid() {
  return {
    type: RESTART_GRID,
  };
}
