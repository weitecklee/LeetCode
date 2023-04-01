class Solution:
    def waysToMakeFair(self, nums: List[int]) -> int:
      oddSum = 0
      evenSum = 0
      for i in range(len(nums)):
        if i % 2:
          evenSum += nums[i]
        else:
          oddSum += nums[i]
      count = 0
      for i in range(len(nums)):
        if i % 2 > 0:
          evenSum -= nums[i]
          evenSum += nums[i - 1]
        else:
          oddSum -= nums[i]
          oddSum += nums[i - 1] if i > 0 else 0
        if evenSum == oddSum:
          count += 1
      return count