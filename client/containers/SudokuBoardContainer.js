import { connect } from 'react-redux';
import { editCell } from '../actions/grid.js';
import SudokuBoardComponent from '../components/SudokuBoardComponent.js';

function mapStateToProps(state) {
  return {
    grid: state.grid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCellChange(i, j, num) {
      dispatch(editCell(i, j, num));
    },
  };
}

/**
 * SudokuBoardContainer maps the redux state to the component
 */
const SudokuBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SudokuBoardComponent);

export default SudokuBoardContainer;
