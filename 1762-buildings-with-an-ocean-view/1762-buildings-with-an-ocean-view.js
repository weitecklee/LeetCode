/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
  const res = [];
  let max = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > max) {
      res.push(i);
      max = heights[i];
    }
  }
  return res.reverse();
};