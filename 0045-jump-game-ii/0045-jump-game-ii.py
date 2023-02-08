class Solution:
  def jump(self, nums: List[int]) -> int:
    currJump = 0
    currMax = 0
    jumps = 0
    for i, n in enumerate(nums[:-1]):
      currMax = max(currMax, i + n)
      if currJump == i:
        jumps += 1
        currJump = currMax
    return jumps