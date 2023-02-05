class Solution:
  def largestNumber(self, nums: List[int]) -> str:
    res = list(map(str, nums))
    def compare(a, b):
      if a + b > b + a:
        return -1
      else:
        return 1
    res.sort(key = functools.cmp_to_key(compare))
    if res[0][0] == '0':
      return '0'
    return ''.join(res)