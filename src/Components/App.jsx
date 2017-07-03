import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header.jsx';
import Tile from './Tile.jsx';

const playerNames = ['Red', 'Blue', 'Green', 'Yellow'];

const mapStateToProps = ({ board, currentPlayer }) => ({
  board,
  currentPlayer,
});

const App = ({ board, currentPlayer }) => {
  let k = 0;
  return (
    <div>
      <div>
        Current Player: <span style={{ color: playerNames[currentPlayer] }}>{playerNames[currentPlayer]}</span>
      </div>
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
    </div>
  );
}

export default connect(mapStateToProps)(App);

//
