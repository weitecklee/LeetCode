/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const mapped = new Set();
  const mapper = (a, b, isle) => {
    mapped.add(a + '.' + b);
    isle.push([a, b]);
    if (a > 0 && board[a - 1][b] === 'O' && !mapped.has( (a - 1) + '.' + b)) {
      mapper(a - 1, b, isle);
    }
    if (a < board.length - 1 && board[a + 1][b] === 'O' && !mapped.has( (a + 1) + '.' + b)) {
      mapper(a + 1, b, isle);
    }
    if (b > 0 && board[a][b - 1] === 'O' && !mapped.has( a + '.' + (b - 1))) {
      mapper(a, b - 1, isle);
    }
    if (b < board[0].length - 1 && board[a][b + 1] === 'O' && !mapped.has( a + '.' + (b + 1))) {
      mapper(a, b + 1, isle);
    }

  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O' && !mapped.has(i + '.' + j)) {
        const isle = [];
        mapper(i, j, isle);
        let surrounded = true;
        for (const pos of isle) {
          if (pos[0] === 0 || pos[0] === board.length - 1 || pos[1] === 0 || pos[1] === board[0].length - 1) {
            surrounded = false;
            break;
          }
        }
        if (surrounded) {
          for (const pos of isle) {
            board[pos[0]][pos[1]] = 'X';
          }
        }
      }
    }
  }
  
};