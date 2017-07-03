import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import makeMove from '../Actions/actions';

const playerColors = ['red', 'blue', 'green', 'yellow'];

const mapDispatchToProps = dispatch => ({
  handleClick: (idx, color) => dispatch(makeMove(idx, color)),
});

const mapStateToProps = ({ currentPlayer }) => ({ currentPlayer });

const Tile = ({ tile, idx, handleClick, currentPlayer }) => (
  <div
    className={`tile ${tile.color}`}
    onClick={() => {
      handleClick(idx, playerColors[currentPlayer]);
    }}
  />
);

Tile.proptypes = {
  tile: PropTypes.string,
};
export default connect(mapStateToProps, mapDispatchToProps)(Tile);
