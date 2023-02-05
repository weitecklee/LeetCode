class Solution:
  def findAnagrams(self, s: str, p: str) -> List[int]:
    pCounter = collections.Counter(p)
    sCounter = collections.Counter()
    res = []
    for i in range(len(s)):
      sCounter[s[i]] += 1
      if i > len(p) - 1:
        sCounter[s[i - len(p)]] -= 1
      if pCounter == sCounter:
        res.append(i - len(p) + 1)
    return res
    
      