/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  let zeros = 0;
  for (const c of s) {
    if (c === '0') {
      zeros++;
    }
  }
  let ans = zeros;
  for (const c of s) {
    if (c === '0') {
      zeros--;
      ans = Math.min(ans, zeros);
    } else {
      zeros++;
    }
  }
  return ans;
  
};