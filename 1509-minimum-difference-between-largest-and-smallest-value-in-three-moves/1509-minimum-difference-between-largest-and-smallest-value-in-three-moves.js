/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
  if (nums.length <= 4) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let res = nums[nums.length - 1] - nums[3];
  for (let i = 1; i < 4; i++) {
    const tmp = nums[nums.length - 1 - i] - nums[3 - i];
    if (tmp < res) {
      res = tmp;
    }
  }
  return res;
};