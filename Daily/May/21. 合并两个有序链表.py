# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
# 开一个额外的空间数组
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
      l = []
      while l1: 
          l.append(l1.val)
          l1 = l1.next
      while l2:
          l.append(l2.val)
          l2 = l2.next
      l.sort()

      dummy = ListNode(0)
      curr = dummy
      for i in l:
          node = ListNode(i)
          curr.next = node
          curr = curr.next
      return dummy.next
