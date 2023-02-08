class Solution:
  def canReach(self, arr: List[int], start: int) -> bool:
    seen = set([start])
    q = collections.deque()
    q.append(start)
    while len(q):
      i = q.popleft()
      if i > len(arr) - 1 or i < 0:
        continue
      if arr[i] == 0:
        return True
      if i + arr[i] not in seen:
        seen.add(i + arr[i])
        q.append(i + arr[i])
      if i - arr[i] not in seen:
        seen.add(i - arr[i])
        q.append(i - arr[i])
    return False