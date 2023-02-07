class Solution:
  def totalFruit(self, fruits: List[int]) -> int:
    basket = collections.defaultdict(lambda :0)
    res = 0
    i = 0
    for j, fruit in enumerate(fruits):
      basket[fruit] += 1
      while len(basket) > 2:
        basket[fruits[i]] -= 1
        if basket[fruits[i]] == 0:
          basket.pop(fruits[i])
        i += 1
      res = max(res, j - i + 1)
    return res