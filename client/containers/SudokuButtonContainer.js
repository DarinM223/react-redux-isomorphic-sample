import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { restartGrid } from '../actions/board.js';

const SudokuButtonComponent = ({ onReset }) => (
  <input type="button" value="Reset board" onClick={onReset} />
);

SudokuButtonComponent.propTypes = {
  onReset: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  onReset() {
    dispatch(restartGrid());
  },
});

const SudokuButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SudokuButtonComponent);

export default SudokuButtonContainer;
