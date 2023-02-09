/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const words = s.match(/\S+/g);
  return words.reverse().join(' ');
};