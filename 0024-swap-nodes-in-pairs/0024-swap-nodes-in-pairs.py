# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
  def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
    if not head:
      return head
    if not head.next:
      return head
    node = head
    res = head.next
    last = None
    while node and node.next:
      node2 = node.next
      if last:
        last.next = node2
      node.next = node2.next
      node2.next = node
      last = node
      node = node.next
    return res