class Solution:
  def largestNumber(self, nums: List[int]) -> str:
    numDict = {}
    nums = list(map(str, nums))
    for i in range(10):
      numDict[str(i)] = []
    for num in nums:
      numDict[num[0]].append(num)
    def compare(a, b):
      if a + b > b + a:
        return -1
      else:
        return 1
    for key in numDict:
      numDict[key].sort(key = functools.cmp_to_key(compare))
    res = []
    for i in range(9, -1, -1):
      res += numDict[str(i)]
    if res[0][0] == '0':
      return '0'
    return ''.join(res)