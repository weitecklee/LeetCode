/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let fixed = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      if (fixed) {
        return false;
      }
      if (i == 1) {
        nums[i - 1] = nums[i];
      } else {
        if (nums[i - 2] <= nums[i]) {
           nums[i - 1] = nums[i];
        } else {
          nums[i] = nums[i - 1];
        }
      }
      fixed = true;
    }
  }
  return true;
};