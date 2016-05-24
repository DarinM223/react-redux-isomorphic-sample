import React, { PropTypes } from 'react';
import SudokuGroupComponent from './SudokuGroupComponent.js';

const styles = {
  breakStyle: {
    whiteSpace: 'pre',
    display: 'block',
  },
};

export default function SudokuBoardComponent({ board, onCellChange }) {
  const components = [];
  const grid = board.get('grid');
  const won = board.get('won') === true ? 'true' : 'false';
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
      <p>Won: {won}</p>
      {components}
    </div>
  );
}

SudokuBoardComponent.propTypes = {
  board: PropTypes.object.isRequired,
  onCellChange: PropTypes.func.isRequired,
};
