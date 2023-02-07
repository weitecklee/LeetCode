class Solution:
  def checkPowersOfThree(self, n: int) -> bool:
    while n > 0 and n == int(n):
      a = math.pow(3, round(math.log(n, 3)))
      if n / a >= 2:
        return False
      n -= a
    return n == 0