/**
 * @param {string} s
 * @return {boolean}
 */
var makePalindrome = function(s) {
  let ops = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] != s[s.length - i - 1]) {
      ops++;
      if (ops > 2) {
        return false;
      }
    }
  }
  return true;
};