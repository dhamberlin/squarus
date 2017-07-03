const makeMove = (idx, color) => ({
  type: 'MAKE_MOVE',
  r: idx.r,
  c: idx.c,
  color,
});

export default makeMove;
