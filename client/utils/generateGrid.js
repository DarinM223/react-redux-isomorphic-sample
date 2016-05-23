const VALID_GRID = [
  ['7', '8', '9', '1', '2', '3', '4', '5', '6'],
  ['4', '5', '6', '7', '8', '9', '1', '2', '3'],
  ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ['2', '3', '4', '5', '6', '7', '8', '9', '1'],
  ['5', '6', '7', '8', '9', '1', '2', '3', '4'],
  ['8', '9', '1', '2', '3', '4', '5', '6', '7'],
  ['3', '4', '5', '6', '7', '8', '9', '1', '2'],
  ['6', '7', '8', '9', '1', '2', '3', '4', '5'],
  ['9', '1', '2', '3', '4', '5', '6', '7', '8'],
];

/**
 * Swap random rows or columns in the each group
 */
export function swapRandomInGrid(inputGrid, rows = true) {
  const grid = inputGrid;
  let [max, min] = [2, 0];

  // Randomly exchange rows from the same group for each group
  for (let _ = 0; _ < 3; _++) {
    const first = Math.floor(Math.random() * (max - min + 1)) + min;

    let second;
    do {
      second = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (second === first);

    max += 3;
    min += 3;

    // Swap rows or columns
    if (rows) {
      for (let col = 0; col < 9; col++) {
        const temp = grid[first][col];
        grid[first][col] = grid[second][col];
        grid[second][col] = temp;
      }
    } else {
      for (let row = 0; row < 9; row++) {
        const temp = grid[row][first];
        grid[row][first] = grid[row][second];
        grid[row][second] = temp;
      }
    }
  }
}

/**
 * Generates a 9x9 sudoku grid with some numbers filled in
 * TODO(DarinM223): improve algorithm to account for difficulty
 */
export default function generateGrid() {
  const grid = VALID_GRID.map((row) => row.map((elem) => ({ number: elem, isErr: false })));

  // Swap random rows and columns in each group
  swapRandomInGrid(grid);
  swapRandomInGrid(grid, false);

  // TODO(DarinM223): blank out random elements

  return grid;
}
