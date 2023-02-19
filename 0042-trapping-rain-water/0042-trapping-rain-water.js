/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  let leftWall = height[left];
  let rightWall = height[right];
  let water = 0;
  while (left < right) {
    if (leftWall < rightWall) {
      left++;
      if (height[left] > leftWall) {
        leftWall = height[left];
      } else {
        water += leftWall - height[left];
      }
    } else {
      right--;
      if (height[right] > rightWall) {
        rightWall = height[right];
      } else {
        water += rightWall - height[right];
      }
    }
  }
  return water;
};