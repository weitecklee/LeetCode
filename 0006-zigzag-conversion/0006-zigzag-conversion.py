class Solution:
  def convert(self, s: str, numRows: int) -> str:
    if numRows == 1:
      return s
    res = [''] * numRows
    row = 0
    order = -1
    for letter in s:
      res[row] += letter
      if row == 0 or row == numRows - 1:
        order *= -1
      row += order
    return ''.join(res)