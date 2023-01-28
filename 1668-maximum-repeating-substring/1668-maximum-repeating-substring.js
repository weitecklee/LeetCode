/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  const reg = new RegExp('(' + word + ')\\1*', 'g')
  let max = 0;
  for (let i = 0; i <= sequence.length - word.length; i++) {
    const matches = sequence.slice(i).match(reg);
    if (!matches) {
      continue;
    }
    for (const match of matches) {
      max = Math.max(max, match.length / word.length)
    }
  }
  return max;
};