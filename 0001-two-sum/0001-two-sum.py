class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numMap = {}
        for i, n in enumerate(nums):
          if target - n in numMap:
            return [i, numMap[target - n]]
          numMap[n] = i