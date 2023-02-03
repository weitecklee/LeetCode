import heapq

class Solution:
  def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
    minHeap = []
    for i in range(min(k, len(matrix))):
      minHeap.append((matrix[i][0], i, 0))
    heapq.heapify(minHeap)
    for i in range(k):
      val, r, c = heapq.heappop(minHeap)
      if c < len(matrix) - 1:
        heapq.heappush(minHeap, (matrix[r][c + 1], r, c + 1))
    return val
        