import React from 'react';
import SudokuBoardContainer from './containers/SudokuBoardContainer.js';

/**
 * The main App component that contains the other containers
 */
export default function App() {
  return (
    <div>
      <SudokuBoardContainer />
    </div>
  );
}
