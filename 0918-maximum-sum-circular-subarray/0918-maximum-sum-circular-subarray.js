/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let normalSum = nums[0];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    normalSum = Math.max(normalSum, sum);
    sum = sum < 0 ? 0 : sum;
  }
  const rightMax = new Array(nums.length);
  rightMax[nums.length - 1] = nums[nums.length - 1];
  let suffixSum = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixSum += nums[i];
    rightMax[i] = Math.max(rightMax[i + 1], suffixSum);
  }
  let specialSum = nums[0];
  sum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    sum += nums[i];
    specialSum = Math.max(specialSum, sum + rightMax[i + 1]);
  }
  return Math.max(normalSum, specialSum);
};