import React from 'react';
import SudokuBoardComponent from './components/SudokuBoardComponent.js';

/* eslint-disable no-console */

/**
 * The main App component that contains the other containers
 */
export default function App() {
  const grid = [
    [{ number: '1', isErr: false }, { number: '2', isErr: false }],
    [{ number: '2', isErr: true }, { number: '9', isErr: false }],
  ];

  return (
    <div>
      <SudokuBoardComponent
        grid={grid}
        onCellChange={(i, j, num) => console.log(`(${i}, ${j}) changed to ${num}`)}
      />
    </div>
  );
}
