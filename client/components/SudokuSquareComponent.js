import React, { PropTypes } from 'react';

const styles = {
  square: {
    width: 50,
    height: 50,
    textAlign: 'center',
  },
};

export default function SudokuSquareComponent({ number, isErr, onNumberChange }) {
  const onTextChange = (e) => {
    const ch = e.target.value[e.target.value.length - 1];
    const isNum = /^\d+$/.test(ch);
    const num = parseInt(ch, 10);

    if (isNum && !isNaN(num)) {
      onNumberChange(ch);
    } else {
      onNumberChange(' ');
    }
  };

  let textFieldStyle = styles.square;
  if (isErr === true) {
    textFieldStyle = { ...styles.square, color: 'white', background: 'red' };
  }

  return <input style={textFieldStyle} type="text" value={number} onChange={onTextChange} />;
}

SudokuSquareComponent.propTypes = {
  number: PropTypes.string.isRequired,
  isErr: PropTypes.bool,
  onNumberChange: PropTypes.func.isRequired,
};
