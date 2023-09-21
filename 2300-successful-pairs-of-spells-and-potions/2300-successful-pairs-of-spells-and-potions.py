class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        pairs = []
        potions.sort()
        n = len(potions)
        for spell in spells:
          if (potions[0] * spell) >= success:
            pairs.append(len(potions))
          elif (potions[-1] * spell) < success:
            pairs.append(0);
          else:
            left = 0
            right = len(potions) - 1
            while left < right:
              mid = left + (right - left) // 2
              check = spell * potions[mid]
              if check < success:
                left = mid + 1
              else:
                right = mid
            pairs.append(len(potions) - left)
        return pairs