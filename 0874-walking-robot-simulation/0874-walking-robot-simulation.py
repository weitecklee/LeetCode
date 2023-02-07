class Solution:
  def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
    oSet = set()
    for obstacle in obstacles:
      oSet.add((obstacle[0], obstacle[1]))
    direction = (0, 1)
    pos = (0, 0)
    res = 0
    for command in commands:
      if command == -1:
        direction = (0 if direction[0] != 0 else direction[1], 0 if direction[1] != 0 else -direction[0])
      elif command == -2:
        direction = (0 if direction[0] != 0 else -direction[1], 0 if direction[1] != 0 else direction[0])
      else:
        for i in range(command):
          pos2 = (pos[0] + direction[0], pos[1] + direction[1])
          if pos2 in oSet:
            break
          pos = pos2
          res = max(res, pos[0] * pos[0] + pos[1] * pos[1])
    return res