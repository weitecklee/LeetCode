class Solution:
  def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
    trips.sort(key = operator.itemgetter(1))
    passengers = 0
    drops = {}
    last = 0
    for trip in trips:
      for i in range(last, trip[1] + 1):
        if i in drops:
          passengers -= drops[i]
          drops.pop(i)
      if trip[2] not in drops:
        drops[trip[2]] = 0
      drops[trip[2]] += trip[0]
      last = trip[1]
      passengers += trip[0]
      if passengers > capacity:
        return False
    return True