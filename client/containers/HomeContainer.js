import { connect } from 'react-redux';
import { clickButton, editText } from '../actions/home.js';
import HomeComponent from '../components/HomeComponent.js';

function mapStateToProps(state) {
  return {
    button: state.button,
    text: state.text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick() {
      dispatch(clickButton());
    },
    onTextChange(text) {
      dispatch(editText(text));
    },
  };
}

/**
 * HomeContainer maps the redux state to the component
 */
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
