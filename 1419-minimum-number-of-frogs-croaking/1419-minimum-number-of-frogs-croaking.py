class Solution:
    def minNumberOfFrogs(self, croakOfFrogs: str) -> int:
        c = 0
        r = 0
        o = 0
        a = 0
        maxC = 0
        for char in croakOfFrogs:
          if char == "c":
            c += 1
            if c > maxC:
              maxC = c
          elif char == "r":
            r += 1
            if r > c:
              return -1
          elif char == "o":
            o += 1
            if o > r:
              return -1
          elif char == "a":
            a += 1
            if a > o:
              return -1
          else:
            c -= 1
            r -= 1
            o -= 1
            a -= 1
            if c < 0 or r < 0 or o < 0 or a < 0:
              return -1
        if c > 0 or r > 0 or o > 0 or a > 0:
          return -1
        return maxC
            