import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header.jsx';
import Tile from './Tile.jsx';

const mapStateToProps = ({ board }) => ({
  board
});

const App = ({ board }) => {
  let k = 0;
  return (
    <div className="board">
      {board.map((row, r) => (
        <div className="row" key={'row' + r}>
          {row.map((tile, c) => (
            <Tile
              key={`tile ${k++}`}
              tile={tile}
              idx={{ r, c }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default connect(mapStateToProps)(App);

//
