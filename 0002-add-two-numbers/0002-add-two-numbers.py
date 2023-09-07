# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
      head = ListNode()
      currSum = l1.val + l2.val
      tmp = 0
      if currSum >= 10:
        currSum -= 10
        tmp = 1
      else:
        tmp = 0
      head.val = currSum
      prev = head
      while l1.next is not None and l2.next is not None:
        l1 = l1.next
        l2 = l2.next
        currSum = l1.val + l2.val + tmp
        if currSum >= 10:
          currSum -= 10
          tmp = 1
        else:
          tmp = 0
        curr = ListNode(currSum)
        prev.next = curr
        prev = curr
      while l1.next is not None:
        l1 = l1.next
        currSum = l1.val + tmp
        if currSum >= 10:
          currSum -= 10
          tmp = 1
        else:
          tmp = 0
        curr = ListNode(currSum)
        prev.next = curr
        prev = curr
      while l2.next is not None:
        l2 = l2.next
        currSum = l2.val + tmp
        if currSum >= 10:
          currSum -= 10
          tmp = 1
        else:
          tmp = 0
        curr = ListNode(currSum)
        prev.next = curr
        prev = curr
      if tmp > 0:
        prev.next = ListNode(1)
      return head