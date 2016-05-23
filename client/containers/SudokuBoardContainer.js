import { connect } from 'react-redux';
import { editCell } from '../actions/board.js';
import SudokuBoardComponent from '../components/SudokuBoardComponent.js';

function mapStateToProps(state) {
  return {
    board: state.board,
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
