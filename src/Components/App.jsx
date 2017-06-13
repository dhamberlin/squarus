import React, { Component } from 'react';
import '../../public/styles/_app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      turn: 'R',
    };
  }
  render() {
    return (
      <h1 className="app-header"><span className="sq">SQ</span><span className="ua">UA</span><span className="ru">RU</span>S</h1>
    );
  }
}

export default App;
