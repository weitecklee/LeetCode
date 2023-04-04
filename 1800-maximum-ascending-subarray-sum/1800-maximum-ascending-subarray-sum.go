func maxAscendingSum(nums []int) int {
  sum := nums[0]
  maxSum := nums[0]
  for i := 1; i < len(nums); i++ {
    if nums[i] <= nums[i - 1] {
      if sum > maxSum {
        maxSum = sum
      }
      sum = 0
    }
    sum += nums[i]
  }
  if sum > maxSum {
    return sum
  }
  return maxSum;
}