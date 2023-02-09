/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
  while (nums.length > k) {
    const i = nums.indexOf(Math.min(...nums));
    nums = nums.slice(0, i).concat(nums.slice(i + 1))
  }
  return nums;
};