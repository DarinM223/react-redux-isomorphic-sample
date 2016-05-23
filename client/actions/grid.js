/**
 * Action types
 */

export const EDIT_CELL = 'EDIT_CELL';

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
