# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        def node2num(node):
            val = 0
            while node:
                val = val * 10 + node.val
                node = node.next
            return val
        if l1 == None:
            return l2
        if l2 == None:
            return l1
        res = node2num(l1) + node2num(l2)
        dummyNode = ListNode(0)
        startNode = dummyNode
        for i in str(res):
            startNode.next = ListNode(int(i))
            startNode = startNode.next
        return dummyNode.next
