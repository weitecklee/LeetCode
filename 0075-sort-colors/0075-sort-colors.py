class Solution:
  def sortColors(self, nums: List[int]) -> None:
    rwb = [0, 0, 0]
    for num in nums:
      rwb[num] += 1
    for i in range(rwb[0]):
      nums[i] = 0
    for i in range(rwb[0], rwb[0] + rwb[1]):
      nums[i] = 1
    for i in range(rwb[0] + rwb[1], rwb[0] + rwb[1] + rwb[2]):
      nums[i] = 2
    
        