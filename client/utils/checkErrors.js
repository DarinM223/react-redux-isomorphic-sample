/**
 * Returns a new board with all of the errors cleared from
 * each cell and checks for blank number cells
 * @param {Immutable.Object} board the sudoku board to check
 * @param {boolean} gameLost optional parameter that specifies if there were
 * errors before calling this function
 * @return {[Immutable.Object,boolean]} a tuple of the new board and
 * a boolean that is true if there are any errors with the board
 */
export function clearErrors(board, gameLost = false) {
  let grid = board.get('grid');
  let anyErrors = gameLost;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // Prevent winning if there is a blank
      if (grid.getIn([row, col, 'number']) === ' ') {
        if (anyErrors === false) anyErrors = true;
      }
      grid = grid.setIn([row, col, 'isErr'], false);
    }
  }
  return [board.set('grid', grid), anyErrors];
}

/**
 * Returns a new board that checks all rows with duplicate values
 * and marks the duplicates as an error
 * @param {Immutable.Object} board the sudoku board to check
 * @param {boolean} gameLost optional parameter that specifies if there were
 * errors before calling this function
 * @return {[Immutable.Object,boolean]} a tuple of the new board and
 * a boolean that is true if there are any errors with the board
 */
export function checkRows(board, gameLost = false) {
  let grid = board.get('grid');
  let anyErrors = gameLost;

  for (let row = 0; row < 9; row++) {
    const numMap = new Map();
    for (let col = 0; col < 9; col++) {
      const number = grid.getIn([row, col, 'number']);
      if (numMap.has(number)) {
        numMap.get(number).push([row, col]);
      } else {
        numMap.set(number, [[row, col]]);
      }
    }

    for (const [, value] of numMap) {
      if (value.length > 1) {
        if (anyErrors === false) anyErrors = true;
        for (const [errRow, errCol] of value) {
          grid = grid.setIn([errRow, errCol, 'isErr'], true);
        }
      }
    }
  }

  return [board.set('grid', grid), anyErrors];
}

/**
 * Returns a new board that checks all columns with duplicate values
 * and marks the duplicates as an error
 * @param {Immutable.Object} board the sudoku board to check
 * @param {boolean} gameLost optional parameter that specifies if there were
 * errors before calling this function
 * @return {[Immutable.Object,boolean]} a tuple of the new board and
 * a boolean that is true if there are any errors with the board
 */
export function checkCols(board, gameLost = false) {
  let grid = board.get('grid');
  let anyErrors = gameLost;

  for (let col = 0; col < 9; col++) {
    const numMap = new Map();
    for (let row = 0; row < 9; row++) {
      const number = grid.getIn([row, col, 'number']);
      if (numMap.has(number)) {
        numMap.get(number).push([row, col]);
      } else {
        numMap.set(number, [[row, col]]);
      }
    }

    for (const [, value] of numMap) {
      if (value.length > 1) {
        if (anyErrors === false) anyErrors = true;
        for (const [errRow, errCol] of value) {
          grid = grid.setIn([errRow, errCol, 'isErr'], true);
        }
      }
    }
  }

  return [board.set('grid', grid), anyErrors];
}

/**
 * Returns a new board that checks all 3x3 subsquares with duplicate values
 * and marks the duplicates as an error
 * @param {Immutable.Object} board the sudoku board to check
 * @param {boolean} gameLost optional parameter that specifies if there were
 * errors before calling this function
 * @return {[Immutable.Object,boolean]} a tuple of the new board and
 * a boolean that is true if there are any errors with the board
 */
export function checkGroups() {
  // TODO(DarinM223): implement this
}

export default function checkErrors(board) {
  const [newBoard, lost] = checkRows(...checkCols(...clearErrors(board)));
  return newBoard.set('won', !lost);
}
