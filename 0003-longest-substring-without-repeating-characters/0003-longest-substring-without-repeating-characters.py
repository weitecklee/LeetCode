class Solution:
  def lengthOfLongestSubstring(self, s: str) -> int:
    chars = {}
    res = 0
    for i, c in enumerate(s):
      if c in chars:
        res = max(res, len(chars))
        last = chars[c]
        chars2 = {}
        for k in chars:
          if chars[k] > last:
            chars2[k] = chars[k]
        chars = chars2
      chars[c] = i
    return max(res, len(chars))