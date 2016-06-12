import React from 'react';
import SudokuButtonContainer from './containers/SudokuButtonContainer.js';
import SudokuBoardContainer from './containers/SudokuBoardContainer.js';

/**
 * The main App component that contains the other containers
 */
const App = () => (
  <div>
    <SudokuButtonContainer />
    <SudokuBoardContainer />
  </div>
);

export default App;
