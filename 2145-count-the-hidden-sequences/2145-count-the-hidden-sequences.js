/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
  let n = 0;
  let max = 0;
  let min = 0;
  
  for (const d of differences) {
    n += d;
    max = Math.max(max, n);
    min = Math.min(min, n);
  }
  
  return Math.max(0, upper - lower - max + min + 1);
    
};