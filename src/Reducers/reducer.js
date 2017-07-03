import { combineReducers } from 'redux';


const board = (state = Array(20).fill(Array(20).fill({ color: 'grey' })), action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      return state.map((row, r) =>
        row.map((tile, c) =>
          (r === action.r && c === action.c) ? { ...tile, color: action.color } : { ...tile }));

    default: return state;
  }
};

const currentPlayer = (state = 0, action) => {
  switch (action.type) {
    case 'MAKE_MOVE':
      return (state + 1) % 4;
    default: return state;
  }
};

const reducer = combineReducers({
  board,
  currentPlayer,
});

export default reducer;
