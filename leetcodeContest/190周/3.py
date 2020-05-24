# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pseudoPalindromicPaths (self, root: TreeNode) -> int:
        self.a = [0] * 10
        self.count = 0
        self.dfs(root, [])
        return self.count;
        
    def dfs(self, root, path):
        if root is None:
            return
        self.a[root.val]+=1
        if root.left is None and root.right is None:
            md = 0
            for i in range(10):
                if self.a[i] % 2 != 0 and self.a[i] != 0:
                    md +=1
            print(self.a)        
            if md < 2:
                self.count +=1
        if root.left:
            self.dfs(root.left, path)
        if root.right:
            self.dfs(root.right, path)
        self.a[root.val] -=1
        