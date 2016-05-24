import React, { PropTypes } from 'react';
import SudokuSquareComponent from './SudokuSquareComponent.js';

const styles = {
  groupStyle: {
    display: 'inline-block',
    borderStyle: 'solid',
    borderWidth: 2,
    width: 150,
    height: 150,
  },
};

/**
 * Get the x and y indexes from the index
 * TODO(DarinM223): this is a hack
 */
function indexToXY(index) {
  switch (index) {
    case 1:
      return [0, 0];
    case 2:
      return [3, 0];
    case 3:
      return [6, 0];
    case 4:
      return [0, 3];
    case 5:
      return [3, 3];
    case 6:
      return [6, 3];
    case 7:
      return [0, 6];
    case 8:
      return [3, 6];
    case 9:
      return [6, 6];
    default:
      return [0, 0];
  }
}

export default function SudokuGroupComponent({ grid, index, onCellChange }) {
  const [xIndex, yIndex] = indexToXY(index);
  const components = [];
  let idGenerator = 0;

  for (let j = yIndex; j < yIndex + 3; j++) {
    const rowComponents = [];
    for (let i = xIndex; i < xIndex + 3; i++) {
      const onNumberChange = onCellChange.bind(null, i, j);
      const elem = grid.getIn([i, j]);
      rowComponents.push(<SudokuSquareComponent
        number={elem.get('number')}
        isErr={elem.get('isErr')}
        onNumberChange={onNumberChange}
        key={idGenerator++}
      />);
    }
    components.push(<span key={idGenerator++}>{rowComponents}</span>);
  }

  return (
    <span style={styles.groupStyle}>
      <span>{components}</span>
    </span>
  );
}

SudokuGroupComponent.propTypes = {
  grid: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onCellChange: PropTypes.func.isRequired,
};
