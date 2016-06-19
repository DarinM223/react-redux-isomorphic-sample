import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import SudokuButtonContainer from './containers/SudokuButtonContainer.js';
import SudokuBoardContainer from './containers/SudokuBoardContainer.js';

/**
 * The main App component that contains the other containers
 */
const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <SudokuButtonContainer />
      <SudokuBoardContainer />
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
