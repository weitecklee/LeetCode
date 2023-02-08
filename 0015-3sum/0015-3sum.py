class Solution:
  def threeSum(self, nums: List[int]) -> List[List[int]]:
    nums.sort()
    ans = []
    for i in range(len(nums) - 2):
      if i > 0 and nums[i] == nums[i - 1]:
        continue
      j = i + 1
      k = len(nums) - 1
      while j < k:
        sum = nums[i] + nums[j] + nums[k]
        if sum == 0:
          ans.append([nums[i], nums[j], nums[k]])
          j += 1
          while j < len(nums) - 1 and nums[j] == nums[j - 1]:
            j += 1
        elif sum < 0:
          j += 1
        else:
          k -= 1
    return ans