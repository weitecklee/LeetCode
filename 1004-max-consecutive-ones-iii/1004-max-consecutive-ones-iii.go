func longestOnes(nums []int, k int) int {
  left := 0
  zeros := 0
  for _, n := range nums {
    if n == 0 {
      zeros++
    }
    if zeros > k {
      if nums[left] == 0 {
        zeros--
      }
      left++
    }
  }
  return len(nums) - left;
}