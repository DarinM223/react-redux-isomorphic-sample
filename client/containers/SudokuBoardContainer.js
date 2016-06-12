import { connect } from 'react-redux';
import { editCell } from '../actions/board.js';
import SudokuBoardComponent from '../components/SudokuBoardComponent.js';

const mapStateToProps = (state) => ({
  board: state.board,
});

const mapDispatchToProps = (dispatch) => ({
  onCellChange(i, j, num) {
    dispatch(editCell(i, j, num));
  },
});

/**
 * SudokuBoardContainer maps the redux state to the component
 */
const SudokuBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SudokuBoardComponent);

export default SudokuBoardContainer;
