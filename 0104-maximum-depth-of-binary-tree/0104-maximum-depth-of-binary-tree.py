# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def maxDepth(self, root: Optional[TreeNode]) -> int:
    def digger(node):
      if node == None: return 0
      left = digger(node.left) + 1 if node.left else 0
      right = digger(node.right) + 1 if (node.right) else 0
      return max(1, left, right)
    return digger(root)