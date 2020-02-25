import React from 'react';
import ReactDOM from "react-dom";


class App extends React.Component {
  render() {
    return <h1>Rails + React Base App</h1>
  }
}

// Main React App
ReactDOM.render(
  <App />,
  document.getElementById("app")
);