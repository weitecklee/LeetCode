class Solution:
  def lengthOfLongestSubstring(self, s: str) -> int:
    lastSeen = {}
    start = 0
    res = 0
    for i, c in enumerate(s):
      if c in lastSeen:
        res = max(res, i - start)
        start = max(start, lastSeen[c] + 1)
      lastSeen[c] = i
    return max(res, len(s) - start)