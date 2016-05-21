import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import app from './reducers.js';
import { clickButton, editText } from './actions.js';

const store = createStore(app);

function HomeComponent({ button, text, onButtonClick, onTextChange }) {
  return (
    <div>
      <h1>Hello world!</h1>
      <p>Button: {button}</p>
      <input type="button" value="Click me!" onClick={() => onButtonClick()} />
      <p>Text: {text}</p>
      <input type="text" onChange={(e) => onTextChange(e.target.value)} />
    </div>
  );
}

HomeComponent.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

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

const VisibleHomeComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

ReactDOM.render(
  <Provider store={store}>
    <VisibleHomeComponent />
  </Provider>,
  document.getElementById('app')
);
