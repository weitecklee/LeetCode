/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let maxD = 0;
  const check = (a, b, d) => {
    let square = true;
    while (a + d <= matrix.length - 1 && b + d <= matrix[0].length - 1) {
      for (let r = a; r < a + d + 1; r++) {
        if (matrix[r][b + d] === '0') {
          square = false;
          break;
        }
      }
      if (!square) {
        return d;
      }
      for (let c = b; c < b + d; c++) {
        if (matrix[a + d][c] === '0') {
          square = false;
          break;
        }
      }
      if (!square) {
        return d;
      }
      d++;
    }
    return d;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '1') {
        maxD = Math.max(maxD, check(i, j, 1));
      }
    }
  }
  return maxD * maxD;
};