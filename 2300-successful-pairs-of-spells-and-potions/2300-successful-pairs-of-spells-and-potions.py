class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        pairs = []
        potions.sort()
        n = len(potions)
        for spell in spells:
          left = 0
          right = n - 1
          while left <= right:
            mid = left + (right - left) // 2
            check = spell * potions[mid]
            if check < success:
              left = mid + 1
            else:
              right = mid - 1
          pairs.append(n - left)
        return pairs