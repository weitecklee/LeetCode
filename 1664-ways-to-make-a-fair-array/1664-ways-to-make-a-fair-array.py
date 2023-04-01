class Solution:
    def waysToMakeFair(self, nums: List[int]) -> int:
      oddSum = 0
      evenSum = 0
      for i in range(len(nums)):
        if i % 2:
          evenSum += nums[i]
        else:
          oddSum += nums[i]
      leftOddSum = 0
      leftEvenSum = 0
      count = 0
      for i in range(len(nums)):
        if i % 2 > 0:
          evenSum -= nums[i]
          leftEvenSum += nums[i - 1]
        else:
          oddSum -= nums[i]
          leftOddSum += nums[i - 1] if i > 0 else 0
        if leftEvenSum + evenSum == leftOddSum + oddSum:
          count += 1
      return count