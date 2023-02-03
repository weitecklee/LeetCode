class Solution:
  def minMeetingRooms(self, intervals: List[List[int]]) -> int:
    rooms = []
    intervals.sort(key = operator.itemgetter(0))
    for interval in intervals:
      if len(rooms) == 0:
        rooms.append(interval[1])
      else:
        if rooms[0] <= interval[0]:
          rooms[0] = interval[1]
        else:
          rooms.append(interval[1])
        rooms.sort()
    return len(rooms)