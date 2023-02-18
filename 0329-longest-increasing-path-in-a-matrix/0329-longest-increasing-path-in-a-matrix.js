/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const cache = new Array(matrix.length);
  for (let i = 0; i < cache.length; i++) {
    cache[i] = new Array(matrix[0].length).fill(0);
  }
  let res = 0;
  const dfs = (a, b) => {
    if (cache[a][b] != 0) {
      return cache[a][b];
    }
    if (a > 0 && matrix[a - 1][b] > matrix[a][b]) {
      cache[a][b] = Math.max(cache[a][b], dfs(a - 1, b));
    }
    if (b > 0 && matrix[a][b - 1] > matrix[a][b]) {
      cache[a][b] = Math.max(cache[a][b], dfs(a, b - 1));
    }
    if (a < matrix.length - 1 && matrix[a + 1][b] > matrix[a][b]) {
      cache[a][b] = Math.max(cache[a][b], dfs(a + 1, b));
    }
    if (b < matrix[0].length - 1 && matrix[a][b + 1] > matrix[a][b]) {
      cache[a][b] = Math.max(cache[a][b], dfs(a, b + 1));
    }
    cache[a][b]++;
    return cache[a][b];
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      res = Math.max(res, dfs(i, j));
    }
  }
  console.log(cache);
  return res;
};