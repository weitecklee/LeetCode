/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  const numbers = s.match(/\d+/g).map(Number);
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] <= numbers[i - 1]) {
      return false;
    }
  }
  return true;
};