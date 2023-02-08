class Solution:
  def jump(self, nums: List[int]) -> int:
    jumps = [len(nums)] * len(nums)
    jumps[0] = 0
    for i, n in enumerate(nums):
      for j in range(i + 1, i + n + 1):
        if j > len(jumps) - 1:
          break
        jumps[j] = min(jumps[j], jumps[i] + 1)
    return jumps[-1]