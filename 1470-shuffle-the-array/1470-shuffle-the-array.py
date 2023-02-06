class Solution:
  def shuffle(self, nums: List[int], n: int) -> List[int]:
    res = [0] * len(nums)
    for i in range(len(nums) // 2):
      res[2 * i] = nums[i]
      res[2 * i + 1] = nums[len(nums) //2 + i]
    return res