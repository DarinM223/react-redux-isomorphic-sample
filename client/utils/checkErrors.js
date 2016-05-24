/**
 * Returns a new grid with all of the errors cleared from
 * each cell and checks for blank number cells
 * @param {Immutable.List} sudokuGrid the sudoku grid to check
 * @param {boolean} gameLost optional parameter that specifies if there were
 * errors before calling this function
 * @return {[Immutable.List,boolean]} a tuple of the new grid and
 * a boolean that is true if there are any errors with the grid
 */
export function clearErrors(sudokuGrid, gameLost = false) {
  let grid = sudokuGrid;
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
  return [grid, anyErrors];
}

/**
 * Returns a new grid that checks all rows with duplicate values
 * and marks the duplicates as an error
 * @param {Immutable.List} sudokuGrid the sudoku grid to check
 * @param {boolean} gameLost optional parameter that specifies if there were
 * errors before calling this function
 * @return {[Immutable.List,boolean]} a tuple of the new grid and
 * a boolean that is true if there are any errors with the grid
 */
export function checkRows(sudokuGrid, gameLost = false) {
  let grid = sudokuGrid;
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

  return [grid, anyErrors];
}

/**
 * Returns a new grid that checks all columns with duplicate values
 * and marks the duplicates as an error
 * @param {Immutable.List} grid the sudoku grid to check
 * @param {boolean} gameLost optional parameter that specifies if there were
 * errors before calling this function
 * @return {[Immutable.List,boolean]} a tuple of the new grid and
 * a boolean that is true if there are any errors with the grid
 */
export function checkCols(sudokuGrid, gameLost = false) {
  let grid = sudokuGrid;
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

  return [grid, anyErrors];
}

/**
 * Returns a new grid that checks all 3x3 subsquares with duplicate values
 * and marks the duplicates as an error
 * @param {Immutable.List} sudokuGrid the sudoku grid to check
 * @param {boolean} gameLost optional parameter that specifies if there were
 * errors before calling this function
 * @return {[Immutable.List,boolean]} a tuple of the new grid and
 * a boolean that is true if there are any errors with the grid
 */
export function checkGroups(sudokuGrid, gameLost = false) {
  let grid = sudokuGrid;
  let anyErrors = gameLost;

  for (let xOffset = 0; xOffset < 3; xOffset++) {
    for (let yOffset = 0; yOffset < 3; yOffset++) {
      const numMap = new Map();
      const [xIndex, yIndex] = [xOffset * 3, yOffset * 3];
      for (let row = xIndex; row < xIndex + 3; row++) {
        for (let col = yIndex; col < yIndex + 3; col++) {
          const number = grid.getIn([row, col, 'number']);
          if (numMap.has(number)) {
            numMap.get(number).push([row, col]);
          } else {
            numMap.set(number, [[row, col]]);
          }
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
  }

  return [grid, anyErrors];
}

export default function checkErrors(board) {
  const [updatedGrid, lost] = checkGroups(
    ...checkRows(...checkCols(...clearErrors(board.get('grid')))));
  return board.set('grid', updatedGrid).set('won', !lost);
}
