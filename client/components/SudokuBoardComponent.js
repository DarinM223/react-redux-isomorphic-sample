import React, { PropTypes } from 'react';
import SudokuSquareComponent from './SudokuSquareComponent.js';

export default function SudokuBoardComponent({ grid, onCellChange }) {
  const renderGrid = [];
  let idGenerator = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const { number, isErr } = row[j];
      const onNumberChange = onCellChange.bind(null, i, j);

      renderGrid.push(<SudokuSquareComponent
        number={number}
        isErr={isErr}
        onNumberChange={onNumberChange}
        key={idGenerator}
      />);
      idGenerator++;
    }

    renderGrid.push(<br key={idGenerator} />);
    idGenerator++;
  }

  return (
    <div>
      {renderGrid}
    </div>
  );
}

SudokuBoardComponent.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.string.isRequired,
    isErr: PropTypes.bool,
  }))).isRequired,
  onCellChange: PropTypes.func.isRequired,
};
