class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        tmp = 1
        res = [1] * len(nums)
        for i in range(len(nums)):
          res[i] *= tmp
          tmp *= nums[i]
        tmp = 1
        for i in range(len(nums) - 1, -1, -1):
          res[i] *= tmp
          tmp *= nums[i]
        return res