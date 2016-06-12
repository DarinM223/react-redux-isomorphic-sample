import React, { PropTypes } from 'react';
import SudokuGroupComponent from './SudokuGroupComponent.js';

const styles = {
  breakStyle: {
    whiteSpace: 'pre',
    display: 'block',
  },
};

export default function SudokuBoardComponent({ won, grid, onCellChange }) {
  const components = [];
  const wonText = won === true ? 'true' : 'false';
  let idGenerator = 0;

  for (let i = 1; i <= 9; i++) {
    components.push(<SudokuGroupComponent
      grid={grid}
      index={i}
      onCellChange={onCellChange}
      key={idGenerator++}
    />);
    if (i % 3 === 0) {
      components.push(<span style={styles.breakStyle} key={idGenerator++} />);
    }
  }

  return (
    <div>
      <p>Won: {wonText}</p>
      {components}
    </div>
  );
}

SudokuBoardComponent.propTypes = {
  grid: PropTypes.object.isRequired,
  won: PropTypes.bool.isRequired,
  onCellChange: PropTypes.func.isRequired,
};
