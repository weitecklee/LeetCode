func canJump(nums []int) bool {
  maxJump := nums[0]
  i := 1
  for i < len(nums) && maxJump >= i {
    if i + nums[i] > maxJump {
      maxJump = i + nums[i]
    }
    i++
  }
  return maxJump >= len(nums) - 1
}