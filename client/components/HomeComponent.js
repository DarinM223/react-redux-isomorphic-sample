import React, { PropTypes } from 'react';

export default function HomeComponent({ button, text, onButtonClick, onTextChange }) {
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
