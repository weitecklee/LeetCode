/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const word = s.match(/\S+(?=\s*$)/);
  return word[0].length;
};