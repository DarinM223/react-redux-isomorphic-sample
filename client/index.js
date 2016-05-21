import React from 'react';
import ReactDOM from 'react-dom';

class HomeComponent extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}

ReactDOM.render(<HomeComponent />, document.getElementById('app'));
