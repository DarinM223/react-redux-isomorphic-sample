/**
 * Action types
 */

export const EDIT_CELL = 'EDIT_CELL';
export const RESTART_GRID = 'RESTART_GRID';

/**
 * Action creators
 */

export const editCell = (i, j, numCh) => ({
  type: EDIT_CELL,
  row: i,
  col: j,
  number: numCh,
});

export const restartGrid = () => ({
  type: RESTART_GRID,
});
