/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
  const see = new Array(heights.length).fill(0);
  const stack = [heights[heights.length - 1]];
  for (let i = heights.length - 2; i >= 0; i--) {
    while (stack.length && heights[i] > stack[stack.length - 1]) {
      see[i]++;
      stack.pop();
    }
    if (stack.length) {
      see[i]++;
    }
    stack.push(heights[i]);
  }
  return see;
};