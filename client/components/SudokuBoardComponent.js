import React, { PropTypes } from 'react';
import SudokuSquareComponent from './SudokuSquareComponent.js';

export default function SudokuBoardComponent({ board, onCellChange }) {
  const renderGrid = [];
  let idGenerator = 0;
  const grid = board.get('grid');
  for (let i = 0; i < grid.size; i++) {
    const row = grid.get(i);
    for (let j = 0; j < row.size; j++) {
      const { number, isErr } = row.get(j).toJS();
      const onNumberChange = onCellChange.bind(null, i, j);

      renderGrid.push(<SudokuSquareComponent
        number={number}
        isErr={isErr}
        onNumberChange={onNumberChange}
        key={idGenerator++}
      />);
    }
    renderGrid.push(<br key={idGenerator++} />);
  }

  return (
    <div>
      {renderGrid}
    </div>
  );
}

SudokuBoardComponent.propTypes = {
  board: PropTypes.object.isRequired,
  onCellChange: PropTypes.func.isRequired,
};
